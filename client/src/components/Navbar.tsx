import Search from "./Search";
import CartDropdown from "./CartDropdown";
import ProfileDropdown from "./ProfileDropdown";
import FavouritesDropdown from "./FavouritesDropdown";
import RegionDropdown from "./RegionDropdown";
import logo from "../assets/logo.svg";

interface NavbarProps {
    onSearch?: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
    const handleSearch = (value: string) => {
        onSearch?.(value);
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    <img src={logo} alt="Logo" className="w-48 h-auto cursor-pointer" />
                    <div className="flex items-center gap-3 flex-1 max-w-5xl">
                        <Search onSearch={handleSearch} />
                        <RegionDropdown />
                    </div>
                    <div className="flex items-center gap-4">
                        <FavouritesDropdown />
                        <CartDropdown />
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
