import { GiSettingsKnobs } from "react-icons/gi";
import CartSectionCard from "../CartSectionCard/CartSectionCard";
import { useEffect, useState } from "react";
import { getStorageData, removeProduct } from "../../Utilities/Index";
import toast from "react-hot-toast/headless";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const Cart = () => {
    const homeNavigate = useNavigate()

    //For cart Data
    const [cartData, setCartData] = useState([]);
    //For view total Cost
    const [totalCost, setTotalCost] = useState(0);
    //For sort by Price
    const [sortPrice, setSortPrice] = useState([]);


    useEffect(() => {
        const initialCartData = getStorageData();
        setCartData(initialCartData);
        setSortPrice(initialCartData);
    }, []);

    // Update total cost whenever cart data changes
    useEffect(() => {
        const total = cartData.reduce((acc, item) => acc + item.price, 0);
        setTotalCost(total);
    }, [cartData]);

    // Sort cart items by price
    const handleSortBtn = () => {
        const sortedPrice = [...cartData].sort((a, b) => b.price - a.price);
        setSortPrice(sortedPrice);
    };

    // Remove a product from the cart
    const handleRemove = (id) => {
        removeProduct(id); // Remove product from localStorage
        const updatedCartData = getStorageData();
        setCartData(updatedCartData);
        setSortPrice(updatedCartData);
    };
    //Handle purches
    const handlePurchase = () => {
        if (cartData.length === 0 || sortPrice.length === 0) {

            return toast
        }
        else {
            document.getElementById("my_modal_1").showModal()

        }

    }
    //
    const handleCloseBtn = () => {
        localStorage.removeItem('cart');
        setCartData([])
        setSortPrice([])
    }

    return (
        <div>
            <Toaster position="top-right" ></Toaster>
            <div className="w-9/12 mx-auto">
                {/* Header Section */}
                <div className="mt-6 flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-[#0B0B0B] text-2xl font-bold">Cart</h2>
                    </div>
                    <div className="flex gap-6 items-center">
                        <h2 className="text-[#0B0B0B] text-2xl font-bold">
                            Total Cost: {totalCost.toFixed(2)}
                        </h2>
                        <div>
                            <button
                                onClick={handleSortBtn}
                                className="btn btn-outline rounded-full border-[#9538E2] text-[#9538E2] text-base px-5"
                            >
                                Sort By Price <GiSettingsKnobs className="text-lg font-semibold" />
                            </button>
                        </div>
                        <div>
                            <button onClick={handlePurchase} className="btn bg-gradient-to-tl from-orange-700 text-white text-base font-semibold bg-[#9538E2] rounded-full px-6">
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
                {/* Cart Items */}
                <div>
                    {sortPrice.map((sData) => (
                        <CartSectionCard
                            handleRemove={handleRemove}
                            key={sData.product_id}
                            sData={sData}
                        />
                    ))}
                </div>
            </div>


            {/* Modal */}
            {/* <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
                open modal
            </button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    {/* Modal Content */}
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/Group.png" alt="" />
                    </div>
                    <h2 className="mt-6 text-center mb-3 text-[#09080F] text-2xl font-bold">
                        Payment Successfully
                    </h2>
                    <div className="flex justify-center items-center">
                        <hr className="border w-96 text-center" />
                    </div>
                    <p className="mt-3 text-center text-base font-semibold text-[#09080F99]">
                        Thanks for purchasing.
                    </p>
                    <p className="mt-3 text-center text-base font-semibold text-[#09080F99]">
                        Total: {totalCost.toFixed(2)}
                    </p>
                    <div className="modal-action">
                        <form method="dialog" className="mx-auto">
                            <button onClick={() => {
                                homeNavigate('/');
                                handleCloseBtn()

                            }} className="btn btn-wide">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Cart;