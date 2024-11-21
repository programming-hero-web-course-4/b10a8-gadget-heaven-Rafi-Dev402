import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
    // bg-[#ECECEC]
    return (
        <div>
           <Navbar></Navbar>

            <div className="min-h-[calc(100vh-550px)] bg-[#ECECEC]">

                <Outlet></Outlet>

            </div>

           <Footer></Footer>
        </div>
    );
};

export default Root;