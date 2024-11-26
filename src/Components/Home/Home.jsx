
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
   const CategoryData = useLoaderData();
   console.log(CategoryData)
    return (
        <div>
            {/* Banner */}
            <Banner />
            <h1 className="text-[#0B0B0B] text-5xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h1>

            {/* Products Section */}
            <section className="flex justify-center flex-col md:flex-col lg:flex-row items-center mx-auto gap-8 lg:w-8/12">
                {/* Category Buttons */}
                <div className="border-2 w-2/12 bg-white rounded-2xl flex flex-col gap-5 p-6">
                    {/* <Link className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] ' to={'/Laptop'}><button >Laptop</button></Link> */}
                    {
                        CategoryData.map(category=> <Link key={category.category} className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] ' to={`/${category.category}`}><button >{category.category}</button></Link> )
                    }
                </div>

                {/* Product Cards */}
                <div className="border-2 w-10/12">
                    <Outlet></Outlet>
                </div>
            </section>

        </div>
    );
};

export default Home;