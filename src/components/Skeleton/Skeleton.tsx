import "./style.css";

const Skeleton = ({ width, height }: { width: string; height: string }) => {
    return (
        <div className="flex flex-col gap-3 py-5 px-8 ">
            <div
                style={{
                    width: width,
                    height: height,
                }}
                className="item"
            ></div>
        </div>
    );
};

export default Skeleton;
