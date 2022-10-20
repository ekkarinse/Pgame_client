import { Link } from "react-router-dom";
import './Member.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import pic from "../picture/whey.jpg";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
import jwt_decode from "jwt-decode";
const Member = () => {
    const [inputcheck_auth, setcheck_auth] = useState({"users_id":""});
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);

    const [member, setmember] = useState({});
    const [inputmonth1, setmonth1] = useState({
        "users_id":decoded.users_id,
        "buy_list":"1 เดือน",
        "product_price":"2200",
    });
    const [inputmonth2, setmonth2] = useState({
        "users_id":decoded.users_id,
        "buy_list":"3 เดือน",
        "product_price":"6500",
    });
    const [inputmonth3, setmonth3] = useState({
        "users_id":decoded.users_id,
        "buy_list":"6 เดือน",
        "product_price":"12000",
    });
    const [inputmonth4, setmonth4] = useState({
        "users_id":decoded.users_id,
        "buy_list":"12 เดือน",
        "product_price":"22000",
    });
    if(!token){
        return window.location.href = "/";
    }else{
    // const [inputs, setInputs] = useState({});
    const getmember = () =>{
        console.log(decoded.users_id);
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
       
        
      const get_month1 = ()=>{

        axios({
            method:"post",
            url: "http://localhost:3004/users/insertHistory",
            header:{
              "Content-Type": "application/json",
            },
            data:inputmonth1,
            }).then((response)=>{
            console.log(response.data);
            handleClose1(false);
            })
      }

      const get_month2 = ()=>{

        axios({
            method:"post",
            url: "http://localhost:3004/users/insertHistory",
            header:{
              "Content-Type": "application/json",
            },
            data:inputmonth2,
            }).then((response)=>{
            console.log(response.data);
            handleClose2(false);    
            })
      }

      const get_month3 = ()=>{

        axios({
            method:"post",
            url: "http://localhost:3004/users/insertHistory",
            header:{
              "Content-Type": "application/json",
            },
            data:inputmonth3,
            }).then((response)=>{
            console.log(response.data);
            handleClose3(false);    
            })
      }

      const get_month4 = ()=>{

        axios({
            method:"post",
            url: "http://localhost:3004/users/insertHistory",
            header:{
              "Content-Type": "application/json",
            },
            data:inputmonth4,
            }).then((response)=>{
            console.log(response.data);
            handleClose4(false);    
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
                    <p>- สามารถออกกำลังกาย</p>
                    <p>- สามารถเล่นเครื่องออกกำลังกายได้ทุ</p>
                    <br></br>
                    <button class="btn btn-warning" id="price1" onClick={handleShow1}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container22">
                    <h4><b id="month2"></b></h4>
                    <br></br>
                    <p>- สามารถออกกำลังกาย</p>
                    <p>- สามารถเล่นเครื่องออกกำลังกายได้ทุ</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price2" onClick={handleShow2}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container23">
                    <h4><b id="month3"></b></h4>
                    <br></br>
                    <p>- สามารถออกกำลังกาย</p>
                    <p>- สามารถเล่นเครื่องออกกำลังกายได้ทุ</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price3" onClick={handleShow3}></button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container24">
                    <h4><b id="month4"></b></h4>
                    <br></br>
                    <p>- สามารถออกกำลังกาย</p>
                    <p>- สามารถเล่นเครื่องออกกำลังกายได้ทุ</p>
                    <br></br>
                    <button class="btn btn-warning"  id="price4" onClick={handleShow4}></button>
                </div>
            </div>

            <Modal show={show1} onHide={handleClose1} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose1}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={get_month1}>
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
                    <Button variant="btn btn-success" onClick={get_month2}>
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
                    <Button variant="btn btn-success" onClick={get_month3}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>
            
            <Modal show={show4} onHide={handleClose4} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการซื้อหรือไม่ ?</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose4}>
                        ปิด
                    </Button>
                    <Button variant="btn btn-success" onClick={get_month4}>
                        ยืนยัน
                    </Button>
                    </Modal.Footer>
                </Modal>
          
        </div>
    </div>;
    }   
};

export default Member;