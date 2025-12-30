import "dotenv/config";
import express from "express";
import cors from "cors";
import list from "./routes/list";
import { testConnection } from "./config/database";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: true,
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
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        process.exit(1);
    }
};

startServer();
