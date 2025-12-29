import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const CartDropdown = () => {
    return (
        <div className="relative">
            <button className="relative p-2 hover:bg-white/10 rounded-sm transition-colors">
                <ShoppingCartIcon className="size-6 text-white" />
            </button>
        </div>
    );
};
