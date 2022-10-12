import {useState} from 'react';
import { Link } from "react-router-dom";
import loginpic from "../picture/lizardboss.jpg";
import './Blank.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const Blank = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return( 
    <>
    <div className="login">
    <head>
    <style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        {/* <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </style>
    </head>
    {/* <h1 id="name">Deep Dark Gyms</h1> */}
    <div className='div-headerpage'>
        <img id= "image" src={loginpic} alt="loginpic" width="500" height="600"></img>
            <div className='pagelogin'>
                <form>
                <label>
                <h2>Register</h2>
                <br></br><br></br>
                    <div className="registerinput">
                    Usename : &nbsp;
                    <input type="text" placeholder='ชื่อผู้ใช้' className="input col-8"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Password : &nbsp;
                    <input type="password" placeholder='รหัสผ่าน' className="input col-8"></input>
                    <br></br><br></br>
                    Re-password : &nbsp;
                    <input type="password" placeholder='รหัสผ่านอีกครั้ง' className="input col-7"></input>
                    <br></br><br></br>
                    Name : &nbsp;
                    <input type="text" placeholder='ชื่อ' className="input col-7"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Surename : &nbsp;
                    <input type="text" placeholder='นามสกุล' className="input col-7"></input>
                    <br></br><br></br>
                    Email : &nbsp;
                    <input type="email" placeholder='อีเมล์' className="input col-9"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Age : &nbsp;
                    <input type="number" placeholder='อายุ' className="input col-sm-3" size="3" maxLength="3"></input>
                    </div>
                    <br></br><br></br>
                    <text>กด <u><a onClick={handleShow}>ข้อเสนอ</a></u> เพื่ออ่านเงื่อนไข</text>
                    <br></br>
                    <input type="checkbox">
                    </input>&nbsp; 
                    ยอมรับข้อเสนอ
                    <br></br><br></br>
                    <div className='div-button'>
                        <button type="submit" class="btn btn-warning" size="lg">Register</button>
                    </div>
                
                </label>
                </form>

                {/* <Button className="nextButton" onClick={handleShow}>
                    Open Modal
                </Button> */}

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>ข้อเสนอ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; คำว่า”แม่” เป็นคำนิยามสั้น ๆ แต่ความหมายนั้นมากมายลึกซึ้ง เกินจะพรรณนา แม่เป็นผู้มีบุญคุณล้นเหลือ แม่เปรียบประดุจ ดาว ที่คอยส่งแสงเจิดจ้าคอยนำพาลูกน้อย แม่เปรียบประจ ครู คนแรกที่คอยอบรมสั่งสอนให้ได้ดี แม่เปรียบดั่ง “นางฟ้า” ที่สูงส่งในใจหนู วันนี้เป็นวันหนึ่งที่ผู้หญิงคนหนึ่งใช้สรรพนามเรียกตนเองว่า “แม่” แม่ได้ให้กำเนิดชีวิตน้อย ๆ ได้ลืมตามาดูโลก เก้าเดือนที่แม่ปกป้องกับหนึ่งวันที่ต้องเจ็บปวด มีใครรู้บ้างว่าผู้หญิงคนที่หนูเรียนกว่า แม่ จะต้องเจ็บปวดแค่ไหน วันที่หนูเกิด เป็นวันที่แม่เจ็บแต่กลับกลายเป็นวันที่แม่มีความสุขที่สุด เมื่อได้เห็นแววตาอันใสซื่อบริสุทธิ์ของลูกน้อย ถึงวันนี้เป็นวันที่แม่เบที่สุดในชีวิตแต่เป็นวันที่ประเสริฐของอีกชีวิตหนึ่ง แต่ลูกบางคนอาจจะไม่นึกถึงวันนี้มากนัก มีใครรู้บ้างว่าชีวิตแลกด้วยชีวิต เมื่อเราเกิดมาในโลกใบนี้ แม่ก็คือ ผู้หญิงคนแรกที่คอยป้อนข้าว ป้อนน้ำ เลี้ยงดูเราจนเติบใหญ่ แม่ได้ให้การศึกษาเท่าที่จะทำได้ แม่ให้เราทุกอย่างที่เราต้องการ แม่ไม่เคยมีคำว่า”ไม่” หรือ “ไม่ให้” กับลูก บางครั้งที่แม่ดุ แม่ทำไปก็มันเกิดจากความรัก ความผูกพันและความห่วงใย ที่แม่คนหนึ่งจะมีให้ แม่ทุกคนอยากให้ลูกเติบโตเป็นคนดี ลูกเป็นความหวังของพ่อแม่ เป็นดังแก้วตาดวงใจ แม่คอยเป็นกำลังใจให้และคอยความสำเร็จของลูกว่าลูกจะประสบความสำเร็จในภายหน้า เป็นคนดีของแม่ เป็นคนดีของสังคม และเป็นคนดีของประเทศชาติ
                        เราได้เกิดมาครั้งหนึ่งในชีวิต เราเคยทำให้แม่มีความสุขบ้างหรือยัง สำหรับลูกบางคนเขาไม่มีโอกาสที่จะตอบแทนพระคุณแม่ สำหรับลูกที่มีโอกาส ควรรีบทดแทนพระคุณของแม่เมื่อตอนที่ยังมีชีวิตอยู่ ในฐานะที่หนูเป็นลูกคนหนึ่ง หนูจะตอบแทนพระคุณแม่ให้สมกับที่แม่รัก และหนูรักแม่ตลอดไป</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>
            
            </div>
        </div>
    </div>;
    </>
    )
};

export default Blank;
