import lithuania from "../assets/lithuania.svg";

const RegionDropdown = () => {
    return (
        <>
            <button className="flex items-center gap-2 text-white px-3 hover:text-accent">
                <img src={lithuania} alt="Lithuania" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-semibold">English EU | EUR</span>
            </button>
        </>
    );
};

export default RegionDropdown;
