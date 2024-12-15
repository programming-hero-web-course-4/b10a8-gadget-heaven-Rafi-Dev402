

// eslint-disable-next-line no-unused-vars, react/prop-types
const Card = ({product}) => {
    return (
        <div className="mx-auto">

            <div className="card bg-base-100 shadow-xl mx-auto ">
                <figure className="p-3 ">
                    <img 
                        className="rounded-xl"
                        src={product.product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#09080F] text-2xl font-bold mb-3">{product.product_title}</h2>
                    <p className="text-[#09080F99] text-xl font-semibold mb-4">Price: {product.price} $</p>
                    <div className="card-actions justify-start">
                        <button className="px-4 py-3   text-[#9538E2] text-lg font-semibold rounded-full bg-white border-2 hover:border-none hover:bg-gray-800 hover:text-white">View Details</button>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;