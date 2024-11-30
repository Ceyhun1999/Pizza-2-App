import { useEffect, useState } from "react";
import { IPizzaDataItem } from "types/index";

const PizzaItems = () => {
    const [pizzaData, setPizzaData] = useState<IPizzaDataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    console.log(pizzaData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
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

    return <div>PizzaItem</div>;
};

export default PizzaItems;
