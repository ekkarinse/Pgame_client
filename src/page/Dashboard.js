import { Link } from "react-router-dom";
import './dass.css';
import React, { useState, useEffect } from 'react';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import {useLocation, useNavigate} from 'react-router-dom';

const Dashboard = () => {
    const token = localStorage.getItem("token");
    if(!token){
       return window.location.href = "/";
    }else{



// const Dashboard = () => {
//     return <div className="db">
//         {/* <h1 id="name">Dashboard</h1> */}

//         <div className="container-lg main">
//             <h1 className="header">ยินดีตอนรับเข้าสู่ Deep Dark Gyms</h1>
//             <div class="card-group">
//                 <div class="card">
//                     <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/gym-membership/4489-gym_people_exercise-1296x728-header.jpg?w=1155&h=1528" class="card-img-top" alt="..." />
//                 </div>
//                 <div class="card">
//                     <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/gym-membership/4489-gym_people_exercise-1296x728-header.jpg?w=1155&h=1528" class="card-img-top" alt="..." />
//                 </div>
//                 <div class="card">
//                     <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/gym-membership/4489-gym_people_exercise-1296x728-header.jpg?w=1155&h=1528" class="card-img-top" alt="..." />
//                 </div>
              
//             </div>

    return (
        <>
    <div className="container-lg-12 con">
        <div className="container-sm   main">
            <h1 className="header"><b>Deep Dark Gyms</b></h1>
            <h3 className="header1"><b>สุขภาพที่ดีกว่าสร้างได้ด้วยตัวคุณ</b></h3>
            <p className="header2"><b>ลงทะเบียน</b></p>
            <h1 className="header3"><b>ออกกำลังกายฟรี</b></h1>
            <h1 className="header4"><b>3 วัน</b></h1>
            <Link to="/member" style={{ textDecoration: 'none' }}><button className="but btn btn-warning" size="lg">ลงทะเบียน</button></Link> 
          
        </div>
    </div>;
    </>
    )
};
}
export default Dashboard;
