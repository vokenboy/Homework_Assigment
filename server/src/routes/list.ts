import { Router, Request, Response } from "express";
import { searchGames } from "../services/list";
import { DatabaseConnectionError, QueryError, NotFoundError } from "../utils/errors";

const router = Router();

router.get("/list", async (req: Request, res: Response) => {
    try {
        const query = req.query.search as string | undefined;

        const games = await searchGames(query);

        return res.json({
            count: games.length,
            data: games,
        });
    } catch (error) {
        if (error instanceof DatabaseConnectionError) {
            return res.status(503).json({
                success: false,
                error: "Database connection failed. Please try again later.",
            });
        }

        if (error instanceof QueryError) {
            return res.status(500).json({
                success: false,
                error: "Failed to fetch games from database.",
            });
        }

        if (error instanceof NotFoundError) {
            return res.status(404).json({
                success: false,
                error: "No games found.",
            });
        }

        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

export default router;
