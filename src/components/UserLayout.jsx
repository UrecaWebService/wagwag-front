import {Outlet} from "react-router-dom";

const UserLayout = () => {
    return (
        <div
            className="h-screen w-screen flex flex-col items-center justify-center relative"
            style={{
                backgroundColor: "black",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ><Outlet/></div>
    )
}

export default UserLayout;