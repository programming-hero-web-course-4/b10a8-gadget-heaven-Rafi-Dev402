import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import  { Toaster } from 'react-hot-toast';


const Root = () => {
    // bg-[#ECECEC]
    return (
        <div>
            <Toaster  position="top-right" ></Toaster>
           <Navbar></Navbar>

            <div className="min-h-[calc(100vh-550px)] bg-[#ECECEC] pb-28">

                <Outlet></Outlet>

            </div>

           <Footer></Footer>
        </div>
    );
};

export default Root;