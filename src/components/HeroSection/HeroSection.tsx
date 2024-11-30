import { FaShoppingCart } from "react-icons/fa";
import LogoSrc from "assets/images/logo.webp";

const HeroSection = () => {
    return (
        <div className="bg-white relative py-4">
            <div className="container-fluid">
                <div className="flex justify-between items-center">
                    <a
                        href="tel:+994519993348"
                        className="duration-300 hover:scale-110 bg-mainColor text-white  text-sm font-bold rounded-lg px-3 py-2"
                    >
                        +994 51 999 33 48
                    </a>
                    <img
                        className="rounded-full max-w-28 absolute z-10 top-[-5%] left-1/2 transform -translate-x-1/2 shadow-customLogo"
                        src={LogoSrc}
                        alt=""
                    />
                    <div className="relative ">
                        <FaShoppingCart  className="text-mainColor" fontSize={22}/>
                        <div className="border  border-solid border-white text-white w-5 h-5 text-[11px] font-bold bg-mainColor rounded-full flex items-center justify-center absolute -top-2 left-3 z-10">0</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
