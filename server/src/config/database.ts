import { Pool } from "pg";

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
});

// Test database connection
pool.on("connect", () => {
    console.log("Database connected successfully");
});

pool.on("error", (err) => {
    console.error("Unexpected database error:", err);
});

// Test connection on startup
export const testConnection = async (): Promise<boolean> => {
    try {
        const client = await pool.connect();
        await client.query("SELECT 1");
        client.release();
        console.log("Database connection test successful");
        return true;
    } catch (error) {
        console.error("Database connection test failed:", error);
        return false;
    }
};

export default pool;
