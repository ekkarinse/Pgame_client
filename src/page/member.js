import { Link } from "react-router-dom";
import './Member.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import pic from "../picture/whey.jpg";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";

const Member = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const token = localStorage.getItem("token");
    const [member, setmember] = useState({});
    if(!token){
        return window.location.href = "/";
    }else{
    // const [inputs, setInputs] = useState({});
    const getmember = () =>{
        axios({
            method:"get",
            url: "http://localhost:3004/users/selectMember",
            header:{
              "Content-Type": "application/json",
            },
            data:member,
            }).then((response)=>{
                
                console.log(response);
              
            })
        }
        
   
  
    const Show_detail_member = () =>{
        axios({
            method:"get",
            url: "http://localhost:3004/users/selectMember",
            header:{
              "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
              
            }
            
          }).then
          (function(response){
            console.log(response);
        }).catch(function(error){
            console.log("error");
          })
        
    }
    getmember();
    return <div className="member">
        <div className="container">
            <h2><b>Member</b></h2>
            <br></br>
            <div class="allcontainer21" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div className="container21">
                    <h4><b>1 เดือน</b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning" onClick={Show_detail_member}>2,200 Baht</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container22">
                    <h4><b>3 เดือน</b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning" onClick={handleShow}>6,500 Baht</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container23">
                    <h4><b>6 เดือน</b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning" onClick={handleShow}>12,000 Baht</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container24">
                    <h4><b>12 เดือน</b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning" onClick={handleShow}>22,000 Baht</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={handleClose}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>
          
        </div>
    </div>;
    }   
};

export default Member;