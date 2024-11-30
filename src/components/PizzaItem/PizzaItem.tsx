import { IPizzaDataItem } from "types/index";

const PizzaItem = ({ imgSrc, title, price, desc }: IPizzaDataItem) => {
    return (
        <div className="shadow-customPizzaItem rounded-lg  group  ">
            <div className="overflow-hidden max-h-30 rounded-t-lg ">
                <img
                    className="rounded-t-lg object-cover group-hover:scale-110 duration-300"
                    src={imgSrc}
                    alt="Pizza"
                />
            </div>
            <div className="py-3 px-5">
                <h2 className="font-bold text-center  text-xl">{title}</h2>
                <p className="text-center text-sm my-3 line-clamp-3">{desc}</p>
                <span className="text-center bg-yellow-500 font-bold text-white rounded-xl w-full block py-2">
                    {price} $
                </span>
                <button className="rounded-xl bg-red-600 text-white w-full cursor-pointer py-2 mt-3">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default PizzaItem;
