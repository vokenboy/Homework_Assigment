import { useState, useRef, useEffect } from "react";
import lithuania from "../assets/lithuania.svg";

const RegionDropdown = () => {
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
            <button
                className="flex items-center gap-2 text-white px-3 hover:text-accent"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={lithuania} alt="Lithuania" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-semibold">English EU | EUR</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-card border shadow-lg z-50">
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={lithuania} alt="Lithuania" className="w-6 h-6 rounded-full" />
                            <span className="text-white font-bold">English EU | EUR</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegionDropdown;
