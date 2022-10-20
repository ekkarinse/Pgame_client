import { Link } from "react-router-dom";
import './Whey.css';
import jwt_decode from "jwt-decode";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import pic from "../picture/whey.jpg";
import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";

const Whey = () => {
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const [inputWhey, setinputWhey] = useState({});
    const [inputwhey1, setwhey1] = useState({
        "users_id":decoded.users_id,
        "buy_list":"Deep dark whey common",
        "product_price":"800",
    });
    const [inputwhey2, setwhey2] = useState({
        "users_id":decoded.users_id,
        "buy_list":"Deep dark whey gold",
        "product_price":"1200",
    });
    const [inputwhey3, setwhey3] = useState({
        "users_id":decoded.users_id,
        "buy_list":"Deep dark whey premium",
        "product_price":"2000",
    });

    
    if(!token){
        return window.location.href = "/";
    }else{
    

     const getwhey = () =>{
        axios({
            method:"get",
            url: "http://localhost:3004/product/select_whey",
            header:{
              "Content-Type": "application/json",
            },
            data:inputWhey,
            }).then((response)=>{
                // console.log(response.data[0].firstname);
                document.getElementById("name1").innerHTML  = response.data[0].name_whey;
                document.getElementById("price1").innerHTML  = response.data[0].price_whey + " Baht";
                document.getElementById("name2").innerHTML  = response.data[1].name_whey;
                document.getElementById("price2").innerHTML  = response.data[1].price_whey + " Baht";
                document.getElementById("name3").innerHTML  = response.data[2].name_whey;
                document.getElementById("price3").innerHTML  = response.data[2].price_whey + " Baht";  
            })
        }
        

        const getwhey1 = ()=>{

            axios({
                method:"post",
                url: "http://localhost:3004/users/insertHistory",
                header:{
                  "Content-Type": "application/json",
                },
                data:inputwhey1,
                }).then((response)=>{
                console.log(response.data);
                handleClose1(false);
                })
          }
    
          const getwhey2 = ()=>{
    
            axios({
                method:"post",
                url: "http://localhost:3004/users/insertHistory",
                header:{
                  "Content-Type": "application/json",
                },
                data:inputwhey2,
                }).then((response)=>{
                console.log(response.data);
                handleClose2(false);    
                })
          }
    
          const getwhey3 = ()=>{
    
            axios({
                method:"post",
                url: "http://localhost:3004/users/insertHistory",
                header:{
                  "Content-Type": "application/json",
                },
                data:inputwhey3,
                }).then((response)=>{
                console.log(response.data);
                handleClose3(false);    
                })

          }
getwhey();
    return <div className="whey">
        
        <div className="container">
            <h2><b>Whey Protein</b></h2>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                 <p id="name1"></p>
                <Link to=""  class="button" onClick={handleShow1}><button id="price1" className='button-header' class="btn btn-warning"></button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                <p id="name2"></p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow2}><button id="price2" className='button-header' class="btn btn-warning"></button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                <p id="name3"></p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow3}><button id="price3"className='button-header' class="btn btn-warning"></button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
               
            </div>
            <br></br><br></br>
          
           
          
            <Modal show={show1} onHide={handleClose1} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose1}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={getwhey1}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose2}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={getwhey2}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose3}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={getwhey3}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>
          
        </div>
    </div>;

    }
};

export default Whey;