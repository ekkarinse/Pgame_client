import { Link } from "react-router-dom";
import "./member1.css";
import bg from "../picture/bg-member.jpg";
import menu1 from "../picture/manu1.jpg";
import menu2 from "../picture/manu2.jpg";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";


const Member = () => {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
 
  return (
    
    <div className="container-lg-12 con1">
      <div className="container-lg-12 mainpage">
        <div className="container-lg-12 box-img">
          <div className="container-lg-12 apply-box">
            <img src={bg} className="img1"></img>
            <div className="container-lg-12 bg1">
              <h1 className="text1">
                <b>Apply for a member</b>
              </h1>
            </div>
          </div>

          <div className="img-menu">
            <div>
              <img src={menu1} className="img2 "></img>
             
                <h1 className="text2">
                  <b>สมัครรายวัน</b>
                
                
                </h1>
                <Link to="" class="button confrim1" onClick={handleShow}><button className='button-header'  class="btn btn-warning">150 Baht</button></Link>
           
            </div>
             <div>
             <img src={menu2} className="img2 "></img>
             <h1 className="text2">
                  <b>สมัครรายเดือน</b>
                
                </h1>
                <Link to="" class="button confrim2" onClick={handleShow}><button className='button-header'  class="btn btn-warning">1,250 Baht</button></Link>
             </div>
           <div>
           <img src="https://static.hd.co.th/768x390/system/blog_articles/main_hero_images/000/000/315/original/iStock-610961742_L.jpg" className="img2"></img>
           <h1 className="text2">
                  <b>สมัครรายปี</b>
                
                </h1>
                <Link to="" class="button confrim3" onClick={handleShow}><button className='button-header'  class="btn btn-warning">15000 Baht</button></Link>
           </div>
             
          </div>
          <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ยืนยันการซื้อ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>คุณต้องการสมัครเพ็คเก็จนี้ใช่หรือไม่ ?</p></Modal.Body>
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
      </div>
    
    </div>
  );
};

export default Member;
