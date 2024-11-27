

// eslint-disable-next-line react/prop-types
const Headding = ({ title, subTitle }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-white text-center">{title}</h1>
            <div className="mx-auto lg:w-[796px] mt-5">
                <p className="text-base font-normal text-white text-center ">{subTitle}</p>
            </div>
        </div>
    );
};

export default Headding;