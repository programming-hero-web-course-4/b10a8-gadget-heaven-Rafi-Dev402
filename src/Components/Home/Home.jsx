
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    const CategoryData = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner />
            <h1 className="text-[#0B0B0B] text-5xl font-bold text-center mb-14">Explore Cutting-Edge Gadgets</h1>

            {/* Products Section */}
            <section className="flex  flex-col md:flex-col lg:flex-row  mx-auto gap-8 lg:w-8/12">

                {/* Category Buttons */}
                <div className=" lg:w-3/12 mx-auto">

                    <div className="bg-white rounded-2xl">
                        <h2 className="text-[#0B0B0B] text-xl font-semibold text-center pt-5">All Categories</h2>
                        
                        <div className="border-base-200  mx-auto   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-5 p-6">


                            {
                                CategoryData.map(category => <NavLink
                                    // className={`font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] `  }
                                    className={({ isActive }) => `border-2  font-bold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 ${isActive && 'bg-[#9538E2] text-white font-extrabold'}`}
                                    key={category.category}
                                    to={`/category/${category.category}`}><button >{category.category}</button>
                                </NavLink>)
                            }

                        </div>
                    </div>
                </div>


                {/* Product Cards */}
                <div className=" w-11/12 border-2 mx-auto">
                    <Outlet></Outlet>
                </div>
            </section>

        </div>
    );
};

export default Home;