import PizzaItem from "components/PizzaItem/PizzaItem";
import Skeleton from "components/Skeleton/Skeleton";
import { useEffect, useState } from "react";
import { IPizzaDataItem } from "types/index";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const PizzaItems = () => {
    const [pizzaData, setPizzaData] = useState<IPizzaDataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await delay(2000); // Искусственная задержка в 2 секунды
                const response = await fetch("http://localhost:3000/pizzaData");
                const data = await response.json();
                setPizzaData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="container">
            <div className="grid grid-cols-4 gap-5">
                {loading
                    ? Array.from({ length: 8 }, (_, index) => index + 1).map((_, index) => <Skeleton width="200px" height="200px" key={index} />)
                    : pizzaData.map((pizza) => <PizzaItem {...pizza} />)}
            </div>
        </section>
    );
};

export default PizzaItems;
