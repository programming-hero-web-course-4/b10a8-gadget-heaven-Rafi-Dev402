import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Headding from "../Headding/Headding";
import { MdAttachMoney } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addFavourite } from "../../Utilities/Index";
import { addwishProduct } from "../../Utilities/wishList";


const ProductDetails = () => {
    const { id } = useParams();
    const productData = useLoaderData()
    const [productd, setProductd] = useState({})

    //for Disable cart button
    // const [isAdded,setisAdded] = useState(false)
    useEffect(() => {
        const singleProduct = productData.find(product => product.product_id === id)
        setProductd(singleProduct);

        //for Disable cart button
        // const storageData = getStorageData()
        // const isExist = storageData.find(item=>item.product_id === singleProduct.product_id )
        // if(isExist){
        //     setisAdded(true)
        // }

    }, [productData, id])

    const { product_title, product_image, price, description, specification, availability, rating } = productd;

    //For rating sters
    const ratingChanged = (newRating) => {

    };

    //for add cart btn 
    const handleFavourite = (favproduct) => {
        addFavourite(favproduct)
        // setisAdded(true)
    }

    //for add wishlist btn
    const handleWishlistBtn = (wishproduct) => {
        addwishProduct(wishproduct)
    }
    return (
        <div>
            <div className="h-96 bg-[#9538E2] ">
                <div className="pt-8">
                    <Headding title={"Product Details"} subTitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Headding>
                </div>
            </div>

            <div className="w-7/12 mx-auto border-2  px-6 py-6 rounded-2xl bg-white -mt-[200px]">

                <div className="flex md:flex-col lg:flex-row  items-center   gap-10">
                    {/* image  */}
                    <div className=" border-black">
                        <img className="rounded-2xl w-[450px] border" src={product_image} alt="" />
                    </div>
                    {/* contant */}
                    <div className="">
                        <h3 className="text-[#09080F] text-2xl font-semibold mb-3">{product_title}</h3>
                        <div className="flex items-center mb-4">
                            <span className="text-xl font-semibold text-[#09080FCC]">Price :</span>
                            <span ><MdAttachMoney className="text-xl font-semibold text-[#09080FCC]" /></span>
                            <span className="text-xl font-semibold text-[#09080FCC]">{price}</span>
                        </div>
                        <div className="mb-4">
                            {
                                (availability) ?
                                    <div className="badge  badge-outline text-sm font-medium px-3 py-3 bg-[#309C081A] border-[#309C08] text-[#309C08]">In Stock</div> :
                                    <div className="badge  bg-red-700 px-3 py-4 text-black text-sm font-semibold">Out of Stock</div>
                            }
                        </div>
                        <p className="text-[#09080F99] text-lg font-normal mb-4">{description}</p>
                        <div className="mb-3">
                            <p className="text-[#09080F] text-lg font-bold mb-3">Specification:</p>
                            {

                                Array.isArray(specification) && specification.length > 0 ? (
                                    specification.map((spe, index) => <li className="font-medium text-base text-[#09080F99]" key={index}>{spe}</li>)
                                ) : (
                                    <p className="text-[#09080F99] text-base font-normal">No specifications available.</p>
                                )

                            }

                        </div>
                        <p className="text-[#09080F] text-lg font-bold">Rating :</p>
                        <div className="flex items-center gap-1 mb-3">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <span className="badge bg-[#09080F0D] text-sm font-medium border py-3">{rating}</span>
                        </div>
                        <div className="flex items-center gap-3">

                            <button onClick={() => handleFavourite(productd)} className="btn text-white bg-[#9538E2] rounded-full px-5  text-base font-semibold">Add To Cart <IoCartOutline className="text-xl" /></button>
                            <button onClick={() => handleWishlistBtn(productd)} className="btn-circle btn  rounded-full p-1 border bg-[#9d6ec4] "><CiHeart className="text-3xl text-white" /></button>
                            {/* disabled = {isAdded} */}
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;