import pool from "../config/database";
import { DatabaseConnectionError, QueryError } from "../utils/errors";

export interface DbGame {
    id: string;
    title: string;
    platform_id: number;
    region_id: number;
    image: string;
    original_price: string;
    discount_percentage: number;
    cashback: string;
    favorites: number;
    has_cashback: boolean;
    platform_name: string;
    platform_icon: string;
    region_name: string;
}

export const getAllGames = async () => {
    try {
        const result = await pool.query<DbGame>(`
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
        `);

        return result.rows;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch games: ${error.message}`);
    }
};

export const getGameById = async (id: string): Promise<DbGame | null> => {
    try {
        const result = await pool.query<DbGame>(
            `
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
            WHERE g.id = $1
        `,
            [id]
        );

        return result.rows[0] || null;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch game by id: ${error.message}`);
    }
};

export const getGamesByPlatform = async (platformId: number) => {
    try {
        const result = await pool.query<DbGame>(
            `
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
            WHERE g.platform_id = $1
        `,
            [platformId]
        );

        return result.rows;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch games by platform: ${error.message}`);
    }
};

export const getGamesByRegion = async (regionId: number) => {
    try {
        const result = await pool.query<DbGame>(
            `
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
            WHERE g.region_id = $1
        `,
            [regionId]
        );

        return result.rows;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch games by region: ${error.message}`);
    }
};

export const getGamesWithCashback = async () => {
    try {
        const result = await pool.query<DbGame>(`
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
            WHERE g.has_cashback = true
        `);

        return result.rows;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch games with cashback: ${error.message}`);
    }
};

export const getGamesWithDiscount = async () => {
    try {
        const result = await pool.query<DbGame>(`
            SELECT
                g.id,
                g.title,
                g.platform_id,
                g.region_id,
                g.image,
                g.original_price,
                g.discount_percentage,
                g.cashback,
                g.favorites,
                g.has_cashback,
                p.name as platform_name,
                p.icon as platform_icon,
                r.name as region_name
            FROM games g
            INNER JOIN platforms p ON g.platform_id = p.id
            INNER JOIN regions r ON g.region_id = r.id
            WHERE g.discount_percentage > 0
        `);

        return result.rows;
    } catch (error: any) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            throw new DatabaseConnectionError("Cannot connect to database");
        }
        throw new QueryError(`Failed to fetch games with discount: ${error.message}`);
    }
};
