import api from "./api";
import { type Game } from "../types/Game";

interface GameList {
    count: number;
    data: Game[];
}

export const getList = async (query?: string) => {
    const params = query?.trim() ? { search: query.trim() } : {};
    const { data } = await api.get<GameList>("/list", { params });
    return { count: data.count, games: data.data };
};
