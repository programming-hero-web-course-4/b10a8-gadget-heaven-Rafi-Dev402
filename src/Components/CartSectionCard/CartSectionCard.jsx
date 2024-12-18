

// eslint-disable-next-line react/prop-types
const CartSectionCard = ({ sData }) => {
    // eslint-disable-next-line react/prop-types
    const { product_title, price, description,product_image    } = sData;
    return (
        <div>

            {/* Card 1 */}
            <div>
                <div className="border bg-white p-5 rounded-2xl flex justify-between items-center mb-3">

                    <div className="flex items-center gap-7">
                        {/* img div */}
                        <div>
                            <img className="border rounded-xl w-[150px] h-[150px] " src={product_image} alt="" />
                        </div>
                        {/* text Div */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="mb-4 text-[#09080F] text-xl font-semibold">{product_title}</h3>
                                <p className="mb-4 text-[#09080F99] text-lg font-normal">{description}</p>
                                <p className="text-[#09080FCC] text-xl font-semibold">Price: {price}</p>
                            </div>
                            {/* Cross Button */}

                        </div>
                    </div>

                    {/* Cross Button */}
                    <div>
                        <button className="btn btn-circle p-1 bg-white border-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    className="text-red-600"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CartSectionCard;