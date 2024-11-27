

// eslint-disable-next-line no-unused-vars, react/prop-types
const Card = ({product}) => {
    return (
        <div className="mx-auto">

            <div className="card bg-base-100 shadow-xl mx-auto ">
                <figure className="p-6 ">
                    <img 
                        className="rounded-xl"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#09080F] text-2xl font-bold mb-3">{product.product_title}</h2>
                    <p className="text-[#09080F99] text-xl font-semibold mb-4">Price: {product.price} $</p>
                    <div className="card-actions justify-start">
                        <button className="px-6 py-3   text-[#9538E2] text-lg font-semibold rounded-full bg-white border-2 hover:bg-green-300">View Details</button>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;