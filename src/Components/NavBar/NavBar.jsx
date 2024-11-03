import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";


const NavBar = () => {

    const navLinks = <>

        <li><NavLink className="text-lg font-semibold text-[#0B0B0BB3]" to={'/home'}>Home</NavLink></li>
        <li><NavLink className="text-lg font-semibold text-[#0B0B0BB3]" to={'/Statistics'}>Statistics</NavLink></li>
        <li><NavLink className="text-lg font-semibold text-[#0B0B0BB3]" to={'/Dashboard'}>Dashboard</NavLink></li>

    </>
    return (
        <div className="bg-base-300">
            <div className="container md:container lg:container mx-auto py-7 ">

                <div className="navbar ">
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
                                    navLinks
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-lg md:text-lg lg:text-2xl  text-[#0B0B0B]">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <div className=" flex mr-4">

                            <div className=" border border-black  rounded-full p-2">
                                <FaCartShopping className="text-2xl" />
                            </div>
                            <div className="-mt-2 -ml-2">
                                <span className=" bg-gray-50 p-1 rounded-full font-bold text-lg">0</span>
                            </div>
                        </div>

                        <div className=" flex ">

                            <div className=" border border-black  rounded-full p-2 ">
                                <MdFavoriteBorder className="text-2xl" />
                            </div>
                            <div className="-mt-2 -ml-2">
                                <span className=" bg-gray-50 p-1 rounded-full font-bold text-lg">0</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;