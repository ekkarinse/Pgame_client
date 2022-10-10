import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/header";

const AppLayout = () => {
    return <div style={{
        padding: '40px 0px 0px 370px',
        // padding: '0px 0px 0px 0px',
    }}>
        {/* <Header /> */}
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
