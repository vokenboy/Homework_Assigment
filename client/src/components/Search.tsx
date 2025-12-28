import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface SearchProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export const Search = ({ onSearch, placeholder = "Search..." }: SearchProps) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch?.(value);
    };

    const handleClear = () => {
        setQuery("");
        onSearch?.("");
    };

    return (
        <div className="relative w-full max-w-xl">
            <div className="relative flex items-center">
                <MagnifyingGlassIcon className="size-6 absolute left-4 text-white text-xl" />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="w-full text-white placeholder-white pl-12 pr-12 py-3 border-2 outline-none focus:outline-none"
                />
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
                    >
                        <XMarkIcon className="size-6" />
                    </button>
                )}
            </div>
        </div>
    );
};
