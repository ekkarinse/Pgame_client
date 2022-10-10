import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
  
function AppHeader() {
  return (
  
   // Using the newly created Header 
   // component in this main component
  //  <Header/>
   <div style={{
        // padding: '50px 0px 0px 370px'
    }}>
        <Header />
        <Outlet />
    </div>
  );
}
export default AppHeader;