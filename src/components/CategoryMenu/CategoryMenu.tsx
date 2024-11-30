import CategoryMenuItem from "components/CategoryMenuItem/CategoryMenuItem";
import Skeleton from "components/Skeleton/Skeleton";
import { useEffect, useState } from "react";
import { ICategoryMenuItem } from "types/index";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const CategoryMenu = () => {
    const [categoryData, setCategoryData] = useState<ICategoryMenuItem[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await delay(2000); // Искусственная задержка в 2 секунды

                const response = await fetch("http://localhost:3000/categoryMenuData");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCategoryData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <nav className="bg-mainColor sticky top-0 left-0 w-full z-10 shadow-customCategory">
            <div className="container">
                <div className="flex justify-center">
                    {loading
                        ? Array.from({ length: 7 }, (_, index) => index + 1).map((_, index) => <Skeleton width="96px" height="96px" key={index} />)
                        : categoryData.map((categoryItem) => {
                              return <CategoryMenuItem key={categoryItem.id} {...categoryItem} />;
                          })}
                </div>
            </div>
        </nav>
    );
};

export default CategoryMenu;
