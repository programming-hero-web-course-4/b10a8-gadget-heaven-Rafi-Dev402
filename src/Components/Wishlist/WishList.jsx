import WishListCard from "../WishListCard/WishListCard";


const WishList = ({storageWishData}) => {
    
    return (
        <div className="w-9/12 mx-auto">

            <div className="mb-8 mt-8">
                <h2 className="text-[#0B0B0B] text-2xl font-bold ">WishList</h2>
            </div>

            {/* Cards container */}
            <div>
                {
                    // eslint-disable-next-line react/prop-types
                    storageWishData.map(storageWishData=> <WishListCard key={storageWishData.product_title} storageWishData={storageWishData}></WishListCard>)
                }
               

            </div>

        </div>
    );
};

export default WishList;