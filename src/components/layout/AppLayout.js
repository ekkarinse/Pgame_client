import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Headerdb from "../header/headerdb";


const AppLayout = () => {
    return <div style={{
        padding: '0px 0px 0px 320px',
        // padding: '0px 0px 0px 0px',
    }}>
        <Headerdb />
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
