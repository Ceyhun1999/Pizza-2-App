import { FaArrowCircleRight } from "react-icons/fa";

const SearchPanel = () => {
    return (
        <div className="mt-12 relative max-w-[1100px] mx-auto">
            <input
                className="border border-solid border-mainColor rounded-3xl py-3 px-5 w-full"
                type="text"
                placeholder="Search for item by title..."
            />
            <FaArrowCircleRight className="absolute top-1/2 right-5 -translate-y-1/2 text-mainColor cursor-pointer" fontSize={30}  />
        </div>
    );
};

export default SearchPanel;
