

// eslint-disable-next-line react/prop-types
const Headding = ({title,subTitle}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="text-base font-normal text-white">{subTitle}</p>
        </div>
    );
};

export default Headding;