import "dotenv/config";
import express from "express";
import cors from "cors";
import list from "./routes/list";
import { testConnection } from "./config/database";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get("/health", async (_req, res) => {
    const isDbConnected = await testConnection();
    return res.json({
        status: "ok",
        database: isDbConnected ? "connected" : "disconnected",
    });
});

app.use("/", list);

const startServer = async () => {
    try {
        const isConnected = await testConnection();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log(`Database status: ${isConnected ? "Connected" : "Disconnected"}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
