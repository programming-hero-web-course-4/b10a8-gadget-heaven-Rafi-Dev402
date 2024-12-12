import { NavLink } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {

    const links = <>

        <li><NavLink
            // className="text-[#0B0B0BB3] text-lg font-medium mr-5"
            className={({ isActive }) => ` text-lg font-medium mr-5 hover:bg-none ${isActive ? 'text-[#9538E2] font-semibold' :  'hover:text-[#9538E2]'}`}

            to='/'>
            Home
        </NavLink></li>
        <li><NavLink className={({ isActive }) => ` text-base font-medium mr-5 ${isActive ? 'text-[#9538E2] font-semibold' :  'hover:text-[#9538E2]'}`} to='/Statistics'>Statistics</NavLink></li>
        <li><NavLink className={({ isActive }) => ` text-base font-medium mr-5 ${isActive ? 'text-[#9538E2] font-semibold' :  'hover:text-[#9538E2]'}`} to='/Dashboard'>Dashboard</NavLink></li>
        <li><NavLink className={({ isActive }) => ` text-base font-medium mr-5 ${isActive ? 'text-[#9538E2] font-semibold' :  'hover:text-[#9538E2]'}`} to='/AllProducts'>All Products</NavLink></li>

    </>

    return (
        <div className=" backdrop:blur-3xl  sticky top-0 z-20 bg-white">

            <div className="pt-6 pb-6 mb-7 lg:w-11/12 mx-auto">
                <div className="navbar   ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <div className=" flex mr-4">

                            <div className=" border border-black  rounded-full p-2">
                                <IoCartOutline className="text-2xl" />
                            </div>
                            <div className="-mt-2 -ml-2">
                                <span className=" bg-gray-50 p-1 rounded-full font-bold text-lg">0</span>
                            </div>
                        </div>

                        <div className=" flex ">

                            <div className=" border border-black  rounded-full p-2 ">
                                <MdOutlineFavoriteBorder className="text-2xl"></MdOutlineFavoriteBorder>
                            </div>
                            <div className="-mt-2 -ml-2">
                                <span className=" bg-gray-50 p-1 rounded-full font-bold text-lg">5</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;