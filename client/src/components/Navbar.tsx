import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import { ProfileDropdown } from "./ProfileDropdown";
import { HeartIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import lithuania from "../assets/lithuania.svg";

export const Navbar = () => {
    const handleSearch = (value: string) => {};

    return (
        <div>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    <img src={logo} alt="Logo" className="w-48 h-auto" />
                    <div className="flex items-center gap-3 flex-1 max-w-5xl">
                        <Search onSearch={handleSearch} placeholder="Search for games..." />

                        <button className="flex items-center gap-2 text-white px-3">
                            <img src={lithuania} alt="Lithuania" className="w-6 h-6 rounded-full" />
                            <span className="text-sm font-semibold">Lithuanian | EUR</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            aria-label="Wishlist"
                            className="p-2 hover:bg-white/10 rounded-sm transition-colors"
                        >
                            <HeartIcon className="size-6 text-white" />
                        </button>

                        <CartDropdown />
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};
