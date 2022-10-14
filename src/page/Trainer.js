import { Link } from "react-router-dom";
import './Trainer.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import pic from "../picture/lizardboss.jpg";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Trainer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return <div className="trainer">
        <div className="container">
            <h2><b>Trainer</b></h2>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>นายพสธร ใจหน่อใจ</p>
                {/* <br></br><br></br> */}
                <Link to="" onClick={handleShow}><button className='button-header' class="btn btn-warning">ดูรายละเอียด</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

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
    </div>;


};

export default Trainer;