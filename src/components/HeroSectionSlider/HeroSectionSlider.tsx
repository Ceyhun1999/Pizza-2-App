import { sliderData } from "data";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const HeroSectionSlider = () => {
    return (
        <Swiper
            direction="horizontal"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={1}
        >
            {sliderData.map((sliderItem) => (
                <SwiperSlide key={sliderItem.id}>
                    <img className="object-cover w-full" src={sliderItem.imgSrc} alt="Pizza" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSectionSlider;
