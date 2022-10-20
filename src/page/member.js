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
                
                
                document.getElementById("month1").innerHTML  = response.data[0].list_member;
                document.getElementById("price1").innerHTML  = response.data[0].price_member+" Baht";
                document.getElementById("month2").innerHTML  = response.data[1].list_member;
                document.getElementById("price2").innerHTML  = response.data[1].price_member+" Baht";
                document.getElementById("month3").innerHTML  = response.data[2].list_member;
                document.getElementById("price3").innerHTML  = response.data[2].price_member+" Baht";
                document.getElementById("month4").innerHTML  = response.data[3].list_member;
                document.getElementById("price4").innerHTML  = response.data[3].price_member+" Baht";
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
                    <h4><b id="month1"></b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning" id="price1" onClick={Show_detail_member}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container22">
                    <h4><b id="month2"></b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price2" onClick={handleShow}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container23">
                    <h4><b id="month3"></b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price3" onClick={handleShow}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container24">
                    <h4><b id="month4"></b></h4>
                    <br></br>
                    <p>- สามารถจ้างเทรนเนอร์</p>
                    <p>- สามารถซื้อเวย์โปรตีน</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price4" onClick={handleShow}></button>
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