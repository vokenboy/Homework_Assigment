import { GameList } from "../components/GameList";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <GameList />
        </div>
    );
};
