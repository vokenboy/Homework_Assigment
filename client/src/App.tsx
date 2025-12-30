import "./App.css";
import Home from "./views/Home";

const App = () => {
    return (
        <>
            <button className="fixed bg-white p-2 bottom-0 right-0 transition-all hover:bg-gray-200">
                Report a problem
            </button>
            <Home />
        </>
    );
};

export default App;
