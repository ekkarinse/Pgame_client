import { Link } from "react-router-dom";
import './History.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
const History = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [history, sethistory] = useState({});

    const token = localStorage.getItem("token");
    if(!token){
        return window.location.href = "/";
    }else{
 
        const gethistroy = () =>{
            axios({
                method:"get",
                url: "http://localhost:3004/users/selectBuy_history",
                header:{
                  "Content-Type": "application/json",
                },
                data:history,
                }).then((response)=>{
                    
                    console.log(response);
                  
                })
            }
            gethistroy();
    return (
    <>
    <div className="history">
        <div className="container">
            <h2 className="head"><b>History</b></h2>
            <br></br>
            <div className="container2">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">ลำดับ</th>
                    <th scope="col" colspan="2">รายการ</th>
                    {/* <th scope="col">Last</th> */}
                    <th scope="col">จำนวนเงิน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td class="menu" colspan="2">สมัครเมมเบอร์รายวัน</td>
                        <td>300 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td class="menu" colspan="2">Optimum Nutrition Whey Protein Gold Standard 2LB</td>
                        <td>1,250 Baht</td>
                    </tr>
                </tbody>
                </table>
            
            </div>
          
        </div>
    </div>;
    </>
    )
    }

};

export default History;