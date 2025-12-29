import user from "../assets/user.jpg";

export const ProfileDropdown = () => {
    return (
        <div className="relative">
            <button className="flex items-center gap-2 text-black font-bold transition-colors">
                <img src={user} alt="User" className="size-8 rounded-full" />
            </button>
        </div>
    );
};
