import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartDropdown = () => {
    return (
        <div className="relative">
            <button className="relative p-2">
                <ShoppingCartIcon className="size-8 text-white hover:text-accent" />
            </button>
        </div>
    );
};

export default CartDropdown;
