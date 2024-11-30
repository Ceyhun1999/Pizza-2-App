import bannerSrc from "assets/images/pizzaBanner.webp";
import { useEffect, useState } from "react";
import { IPizzaDataItem } from "types/index";

const Banner = () => {
    const [pizzaData, setPizzaData] = useState<IPizzaDataItem[]>([]);


    useEffect(() => {
        
    }, [])


    return (
        <div className="m-10">
            <img className="rounded-xl" src={bannerSrc} alt="" />
        </div>
    );
};

export default Banner;
