import { GiSettingsKnobs } from "react-icons/gi";
import CartSectionCard from "../CartSectionCard/CartSectionCard";


// eslint-disable-next-line react/prop-types
const Cart = ({storageCartData}) => {
    
    return (
        <div className=" ">
            <div className="w-9/12 mx-auto">
                <div className="mt-6 flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-[#0B0B0B] text-2xl font-bold ">Cart</h2>
                    </div>

                    <div className="flex gap-6 items-center">
                        <h2 className="text-[#0B0B0B] text-2xl font-bold ">Total Cost:012 </h2>
                        <div>
                            <button className="btn btn-outline rounded-full border-[#9538E2] text-[#9538E2] text-base px-6">Sort By Price <GiSettingsKnobs className="text-lg font-semibold" /></button>

                        </div>
                        <div>
                            <button className="btn text-white text-base font-semibold bg-[#9538E2] rounded-full px-6">Purchase</button>
                        </div>
                    </div>
                </div>
                {/* Cards */}
                <div>
                    {
                       // eslint-disable-next-line react/prop-types
                       storageCartData.map(sData=> <CartSectionCard key={sData.product_id} sData={sData}></CartSectionCard> )
                    }
                   

                </div>
            </div>
        </div>
    );
};

export default Cart;