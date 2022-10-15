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

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
   
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
                    <Modal.Title>ข้อมูลการจองเทรนเนอร์</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <p className="text">ชื่อ : นายพสธร ใจหน่อใจ</p>
                        <p className="text">รายระเอียด : เทรนเนอร์ประจำที่ Deep dark gym บริการเป็นกันเอง</p>
                        <table class="table table-bordered" >
                        <thead>
                            <tr>
                            <th scope="col">วันที่</th>
                            <th scope="col">เวลา</th>
                            {/* <th scope="col">Last</th> */}
                            <th scope="col">จอง</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" rowspan="3">15 ต.ค. 2565</th>
                                <td class="menu">09:00 - 12:00</td>
                                <td class="hire" onClick={handleShow2}>จอง</td>
                            </tr>
                            <tr>
                                <td class="menu">13:00 - 16:00</td>
                                {/* <td class="hired">ถูกจองแล้ว</td> */}
                                <td class="hired">ถูกจองแล้ว</td>
                            </tr>
                            <tr>
                                <td class="menu">17:00 - 20:00</td>
                                <td class="hired">ถูกจองแล้ว</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="3">16 ต.ค. 2565</th>
                                <td class="menu">09:00 - 12:00</td>
                                <td class="hired">ถูกจองแล้ว</td>
                            </tr>
                            <tr>
                                <td class="menu">13:00 - 16:00</td>
                                {/* <td class="hired">ถูกจองแล้ว</td> */}
                                <td class="hire" onClick={handleShow2}>จอง</td>
                            </tr>
                            <tr>
                                <td class="menu">17:00 - 20:00</td>
                                <td class="hire" onClick={handleShow2}>จอง</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>

                        <Modal show={show2} onHide={handleClose2} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>ยืนยันการจอง</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><p>คุณต้องการจองเทรนเนอร์หรือไม่ ?</p></Modal.Body>
                            <Modal.Footer>
                            <Button variant="btn btn-danger" onClick={handleClose2}>
                                ปิด
                            </Button>
                            <Button variant="btn btn-success" onClick={handleClose2}>
                                ยืนยัน
                            </Button>
                            </Modal.Footer>
                        </Modal>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
          
        </div>
    </div>;


};

export default Trainer;