import { Link } from "react-router-dom";
import './Whey.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import pic from "../picture/whey.jpg";
import {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";

const Whey = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputWhey, setWhey] = useState({});
    const getname = document.getElementById('name');

    const getwhey = () => { axios.get('http://localhost:3004/product/select_whey').then(response => {
        console.log(response.data);
       
            getname.innerHTML = response.data[0].name_whey;
            return response.data[0].name_whey;
     });
 
     };
   
     
    // async function getwhey(){
    //     const data = await axios.get("http://localhost:3004/product/select_whey").then(response => {
    //         console.log(response.data[0]);
    //         getname.innerHTML = response.data.name_whey;
    //     });
     
        // axios({
        //   method:"get",
        //   url: "http://localhost:3004/product/select_whey",
        //   header:{
        //     "Content-Type": "application/json",
        //   },
        //   data:inputWhey,
        // })
        // .then(function(response){
        //   console.log("success");
        // //   console.log(response.data);
        //   document.getElementById("wheyset").innerHTML = response.data;
        // }).catch(function(error){
        //   console.log("error");
        // })
    //   }

    getwhey();
    return <div className="whey">
        
        <div className="container">
            <h2><b>Whey Protein</b></h2>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                {/* <button onClick={getwhey}>Test</button> */}
                <h1>ชื่อ : <span id="name" ></span></h1>
                    {/* <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p> */}
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br></br><br></br>
            <div className="trainpic" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="button" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <img src={pic} alt="pic" width="250" height="300"></img>
                <br></br><br></br>
                    <p>Optimum Nutrition Whey Protein Gold Standard 2LB</p>
                {/* <br></br><br></br> */}
                <Link to="" class="buttoncost" onClick={handleShow}><button className='button-header' class="btn btn-warning">1,250 Baht</button></Link> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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


};

export default Whey;