import {useState} from 'react';
import { Link } from "react-router-dom";
import loginpic from "../picture/lizardboss.jpg";
import './Blank.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

const Blank = () => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    return <div className="login">
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
                    <text>กด <u><a href="https://www.youtube.com/watch?v=dfztuzjh8N4">ข้อเสนอ</a></u> เพื่ออ่านเงื่อนไข</text>
                    <br></br>
                    <input type="checkbox">
                    </input>&nbsp; 
                    ยอมรับข้อเสนอ
                    <br></br><br></br>
                    <div className='div-button'>
                        <button type="submit" class="btn btn-warning" size="lg">Register</button>
                    </div>

                <div class="container">
                {/* <!-- Trigger the modal with a button --> */}
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal">Modal</button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                        <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
                     
                </label>
                </form>
            
            </div>
        </div>
    {/* <img id= "image" src={loginpic} alt="loginpic" width="300" height="400"></img>
    <br></br><br></br>
    <h2>Register</h2>
    <input type="text" placeholder='ชื่อผู้ใช้'></input>
    <input type="text" placeholder='รหัสผ่าน'></input>
    <br></br><br></br>
    <input type="text" placeholder='ชื่อ'></input>
    <input type="text" placeholder='นามสกุล'></input>
    <br></br><br></br>
    <input type="text" placeholder='อีเมล์'></input>
    <input type="text" placeholder='อายุ'></input>
    <br></br><br></br>
    <p>กด <u><a href="https://www.youtube.com/watch?v=dfztuzjh8N4">ข้อเสนอ</a></u> เพื่ออ่านเงื่อนไข</p>
    <input type="checkbox">
    </input>ยอมรับข้อเสนอ
    <br></br><br></br>
    <button>Register</button> */}
    </div>;
};

export default Blank;
