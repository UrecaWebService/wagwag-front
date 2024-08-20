// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import settingBg from "./assets/settingBg.png";


const Layout = () => {
    return (
        <div className="h-screen w-screen relative"
            style={{
                backgroundImage: `url(${settingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            {/*<div><h1 className="flex text-white">This is LOGO</h1></div>*/}
            <Outlet />
        </div>
    )
}

export default Layout;