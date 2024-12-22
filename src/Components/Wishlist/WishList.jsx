import { useEffect, useState } from "react";
import WishListCard from "../WishListCard/WishListCard"
import { getStorageDataWish, removeWishItem } from "../../Utilities/wishList";


const WishList = () => {

    const [wishListData,SetWishlistData] = useState([])
    useEffect(()=>{
        const storagecartdata = getStorageDataWish()
        SetWishlistData(storagecartdata);

    },[])
    
    const handleRemoveCartBtn = (id)=>{
        removeWishItem(id)
        const storagecartdata = getStorageDataWish()
        SetWishlistData(storagecartdata);
    }
   

    //Remove btn function wishlist
    
    return (
        <div className="w-9/12 mx-auto">

            <div className="mb-8 mt-8">
                <h2 className="text-[#0B0B0B] text-2xl font-bold ">WishList</h2>
            </div>

            {/* Cards container */}
            <div>

            {
                wishListData.map(wishP=><WishListCard key={wishP.product_id} handleRemoveCartBtn={handleRemoveCartBtn} wishPro={wishP}></WishListCard>)
            }
                

            </div>

        </div>
    );
};

export default WishList;