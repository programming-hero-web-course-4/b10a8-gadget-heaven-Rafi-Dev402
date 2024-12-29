
import Headding from "../Headding/Headding";
import Cart from "../Cart/Cart";
import WishList from "../Wishlist/WishList";
import { useEffect, useState } from "react";
import { getStorageData } from "../../Utilities/Index";
import { getStorageDataWish } from "../../Utilities/wishList";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {

    const [page,setPage] = useState(true);
    const handleCartWishBtn = (value) =>{
        setPage(value)
    }


    const [storageCartData,setstorageCartData] = useState([]);
    const [storageWishData,setstorageWishData] = useState([]);
    useEffect(()=>{
        const sCartData = getStorageData()
        setstorageCartData(sCartData)

        const sWishData = getStorageDataWish()
        setstorageWishData(sWishData)
    },[])
    
    
    return (
        <div>
            <Helmet>
                <title>Gadget Haven | Dashboard</title>
            </Helmet>
            <Toaster   position="top-right" ></Toaster>
            <div className="h-60 bg-[#9538E2] ">
                <div className="pt-8">
                    <div className="mb-8">
                        <Headding title={"Dashboard"} subTitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Headding>
                    </div>
                    <div className="flex justify-center gap-6 ">
                        <button onClick={()=>handleCartWishBtn(true)} className={`btn btn-outline  hover:border-none  border border-white rounded-full px-10 text-lg  font-semibold ${(page)?"text-[#9538E2] bg-white" : "text-white bg-[#9538E2]"} `} >Cart</button>

                        <button onClick={()=>handleCartWishBtn(false)} className={`btn btn-outline  hover:border-none  border border-white rounded-full px-9 text-lg  font-semibold ${(page)? "text-white bg-[#9538E2]" : "text-[#9538E2] bg-white"} `} >Wishlist</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto ">
               {
                (page)? <Cart storageCartData={storageCartData}></Cart> : <WishList storageWishData={storageWishData}></WishList>
               }
            </div>

        </div>
    );
};

export default Dashboard;