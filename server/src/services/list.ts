import { type Game } from "../models/Game";
import { calculateDiscountedPrice } from "../utils/pricing";
import { getAllGames, type DbGame } from "../repositories/list";

const mapDbGameToGame = (dbGame: DbGame): Game => {
    const originalPrice = parseFloat(dbGame.original_price);
    const discountPercentage = dbGame.discount_percentage;
    const currentPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

    return {
        id: dbGame.id,
        title: dbGame.title,
        platform: dbGame.platform_name,
        region: dbGame.region_name,
        image: dbGame.image,
        originalPrice: originalPrice,
        discountPercentage: discountPercentage,
        currentPrice: currentPrice,
        cashback: parseFloat(dbGame.cashback),
        favorites: dbGame.favorites,
        hasCashback: dbGame.has_cashback,
        platformIcon: dbGame.platform_icon,
    };
};

const fuzzyMatchScore = (search: string, text: string) => {
    const searchLower = search.toLowerCase();
    const textLower = text.toLowerCase();

    if (textLower === searchLower) return 1000;

    if (textLower.includes(searchLower)) return 500;

    const searchWords = searchLower.split(/\s+/);
    const textWords = textLower.split(/\s+/);

    let score = 0;

    for (const searchWord of searchWords) {
        for (const textWord of textWords) {
            if (textWord === searchWord) {
                score += 100;
            } else if (textWord.includes(searchWord)) {
                score += 50;
            } else if (searchWord.length >= 3 && textWord.includes(searchWord.substring(0, 3))) {
                score += 10;
            }
        }
    }

    if (textLower.startsWith(searchLower)) {
        score += 200;
    }

    return score;
};

export const searchGames = async (query?: string) => {
    try {
        const dbGames = await getAllGames();

        if (!dbGames || dbGames.length === 0) {
            console.log("No games found in database");
            return [];
        }

        const games = dbGames.map(mapDbGameToGame);

        if (!query || query.trim() === "") {
            return games;
        }

        const searchQuery = query.trim();
        const MIN_SCORE_THRESHOLD = 40;

        const gamesWithScores = games.map((game) => {
            const titleScore = fuzzyMatchScore(searchQuery, game.title);
            const platformScore = fuzzyMatchScore(searchQuery, game.platform) * 0.5;
            const regionScore = fuzzyMatchScore(searchQuery, game.region) * 0.3;

            const totalScore = titleScore + platformScore + regionScore;

            return {
                game,
                score: totalScore,
            };
        });

        const filteredGames = gamesWithScores
            .filter((item) => item.score >= MIN_SCORE_THRESHOLD)
            .sort((a, b) => b.score - a.score)
            .map((item) => item.game);

        if (filteredGames.length === 0) {
            console.log(`No games found matching search query: "${searchQuery}"`);
        }

        return filteredGames;
    } catch (error) {
        console.error("Error in searchGames:", error);
        throw error;
    }
};

export const getGames = async () => {
    try {
        const dbGames = await getAllGames();

        if (!dbGames || dbGames.length === 0) {
            console.log("No games found in database");
            return [];
        }

        return dbGames.map(mapDbGameToGame);
    } catch (error) {
        console.error("Error in getGames:", error);
        throw error;
    }
};
