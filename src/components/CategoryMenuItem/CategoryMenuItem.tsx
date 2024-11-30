import { ICategoryMenuItem } from "types/index";

const CategoryMenuItem = ({ imgSrc, title }: ICategoryMenuItem) => {
    return (
        <div className=" cursor-pointer group flex flex-col gap-1  justify-center items-center py-5 px-8 hover:bg-white duration-300">
            <img className="w-16 object-contain rounded-md" src={imgSrc} alt="Pizza" />
            <h2 className="text-white text-sm group-hover:text-black duration-300">{title}</h2>
        </div>
    );
};

export default CategoryMenuItem;
