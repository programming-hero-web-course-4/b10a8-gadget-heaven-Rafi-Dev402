import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Headding from "../Headding/Headding";


const AllProducts = () => {
    const products = useLoaderData();
    const homeNavigate = useNavigate()

    return (
        <>
            <div className="bg-[#9538E2] h-60 mb-8 ">
                <div className="py-5">
                    <Headding title="All Products Here" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Headding>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="btn btn-outline lg:hover:bg-white hover:text-[#9538E2] border-2 border-white rounded-full px-10 text-lg font-semibold text-white" onClick={()=> homeNavigate('/')}>Home</button>
                </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 container">

                {
                    products.map(product => <Card key={product.product_id} product={product} ></Card>)
                }
            </div>

        </>

    );
};

export default AllProducts;