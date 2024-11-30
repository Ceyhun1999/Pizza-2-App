const Banner = ({ bannerSrc }: { bannerSrc: string }) => {
    return (
        <div className="my-10">
            <img className="rounded-xl w-full object-cover" src={bannerSrc} alt="" />
        </div>
    );
};

export default Banner;
