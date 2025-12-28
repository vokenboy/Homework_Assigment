import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (_req: express.Request, res: express.Response) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
