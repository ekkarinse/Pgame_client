import { Link, resolvePath } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './History.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
const History = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [history, sethistory] = useState({});
   
    const [inputHisto, setHisto] = useState([]);
    const [inputUsers, setUsers] = useState({});
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    const myJSON = JSON.stringify(decoded.users_id);
    const [inputHis, setHis] = useState({
        "users_id":decoded.users_id,
    });
    if(!token){
        return window.location.href = "/";
    }else{
        const get_history = ()=>{
                // console.log(myJSON)
                axios({
                        method:"post",
                         url: "http://localhost:3004/users/selectHistory",
                         header:{
                          "Content-Type": "application/json",
                         },
                         data:inputHis,
                        }).then((response)=>{
                            
                            if(decoded.status === "Ok"){
                             
                            console.log(response.data)
                            setHisto(response.data)

                            
                        
                            }       
                       })
                   }
                  
     
    return (
    <>
    <div className="history">
        <div className="container">
            <h2 className="head"><b>History</b></h2>
            <br></br>
            <div className="container2">
            <button onClick={ get_history} className='button-header' class="btn btn-warning btn_show" >show</button>
           
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
                {inputHisto.map((val,key) => {
                            return (
                        
                          <tr>
                            <th scope="row">{key+1}</th>
                            <td class="menuname" id="history1" colspan="2">{val.buy_list}</td>
                            <td id="price1">{val.product_price}</td>
                          </tr>
                     

                            )
                        })}
                    {inputHisto.map}

                   
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