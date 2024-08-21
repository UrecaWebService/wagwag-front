// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import settingBg from "../assets/settingBg.png";


const Layout = () => {



    return (
        <div
            className="h-screen w-screen flex flex-col items-center justify-center relative"
            style={{
                backgroundImage: `url(${settingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Outlet/>
            <button/>
        </div>
    )
}

export default Layout;