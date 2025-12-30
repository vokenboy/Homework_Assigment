import { useState, useRef, useEffect } from "react";
import user from "../assets/user.jpg";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button className="relative p-2" onClick={() => setIsOpen(!isOpen)}>
                <img
                    src={user}
                    alt="User"
                    className="size-9 rounded-full border-2 border-white hover:border-accent"
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-card border shadow-lg z-50">
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={user}
                                alt="User"
                                className="size-9 rounded-full border-2 border-white"
                            />
                            <span className="text-white font-bold">User</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
