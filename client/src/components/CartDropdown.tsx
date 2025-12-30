import { useState, useRef, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartDropdown = () => {
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
                <ShoppingCartIcon className="size-8 text-white hover:text-accent" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-card border shadow-lg z-50">
                    <div className="p-4">
                        <h3 className="text-white font-bold text-sm mb-3">Shopping Cart</h3>
                        <p className="text-gray-400 text-sm text-center py-4">No products added</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDropdown;
