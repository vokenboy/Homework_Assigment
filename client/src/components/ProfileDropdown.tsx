import user from "../assets/user.jpg";

const ProfileDropdown = () => {
    return (
        <div className="relative">
            <button className="relative p-2">
                <img
                    src={user}
                    alt="User"
                    className="size-9 rounded-full border-2 border-white hover:border-accent"
                />
            </button>
        </div>
    );
};

export default ProfileDropdown;
