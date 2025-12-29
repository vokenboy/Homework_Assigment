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
