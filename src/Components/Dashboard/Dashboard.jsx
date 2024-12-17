import { Outlet } from "react-router-dom";
import Headding from "../Headding/Headding";
import Cart from "../Cart/Cart";
import WishList from "../Wishlist/WishList";


const Dashboard = () => {
    return (
        <div>
            <div className="h-64 bg-[#9538E2] ">
                <div className="pt-8">
                    <div className="mb-8">
                        <Headding title={"Dashboard"} subTitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Headding>
                    </div>
                    <div className="flex justify-center gap-6">
                        <button className="btn btn-outline lg:hover:bg-white hover:border-none hover:text-[#9538E2] border border-white rounded-full px-10 text-lg font-semibold text-white" >Cart</button>

                        <button className="btn btn-outline lg:hover:bg-white hover:border-none hover:text-[#9538E2] border border-white rounded-full px-9 text-lg font-semibold text-white" >Wishlist</button>
                    </div>
                </div>
            </div>

            <div>
                <Cart></Cart>
                <WishList></WishList>
            </div>

        </div>
    );
};

export default Dashboard;