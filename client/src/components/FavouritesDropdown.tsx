import { HeartIcon } from "@heroicons/react/24/outline";

const FavouritesDropdown = () => {
    return (
        <div className="relative">
            <button className="relative p-2">
                <HeartIcon className="size-8 text-white hover:text-accent" />
            </button>
        </div>
    );
};

export default FavouritesDropdown;
