import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Headerdb from "../header/headerdb";
import Burger from "../nav/Burger";
import pic from "../../picture/4663114.png";


const AppLayout = () => {
    return <div style={{
         padding: '0px 0px 0px 0px',
        // padding: '0px 0px 0px 0px',
    }}>
        <Burger />
        <Headerdb />
        <Outlet />
    </div>;
};

export default AppLayout;
