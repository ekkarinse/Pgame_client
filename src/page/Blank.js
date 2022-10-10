import { Link } from "react-router-dom";
import loginpic from "../picture/lizardboss.jpg";
import './Blank.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

const Blank = () => {
    return <div className="login">
    {/* <h1 id="name">Deep Dark Gyms</h1> */}
    <div className='div-headerpage'>
        <img id= "image" src={loginpic} alt="loginpic" width="300" height="400"></img>
            <div className='pagelogin'>
                <form>
                <label>
                <h2>Register</h2>
                <br></br><br></br>
                    <div className="registerinput">
                    Usename : &nbsp;
                    <input type="text" placeholder='ชื่อผู้ใช้' className="input"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Password : &nbsp;
                    <input type="text" placeholder='รหัสผ่าน' className="input"></input>
                    <br></br><br></br>
                    {/* Re-password : &nbsp;
                    <input type="text" placeholder='รหัสผ่านอีกครั้ง' className="input"></input>
                    <br></br><br></br> */}
                    Name : &nbsp;
                    <input type="text" placeholder='ชื่อ' className="input"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Surename : &nbsp;
                    <input type="text" placeholder='นามสกุล' className="input"></input>
                    <br></br><br></br>
                    Email : &nbsp;
                    <input type="text" placeholder='อีเมล์' className="input"></input>
                    &nbsp;&nbsp;
                    <br></br><br></br>
                    Age : &nbsp;
                    <input type="text" placeholder='อายุ' className="input" size="2"></input>
                    </div>
                    <br></br><br></br>
                    <p>กด <u><a href="https://www.youtube.com/watch?v=dfztuzjh8N4">ข้อเสนอ</a></u> เพื่ออ่านเงื่อนไข</p>
                    <input type="checkbox">
                    </input>ยอมรับข้อเสนอ
                    <br></br><br></br>
                    <div className='div-button'>
                        <button class="btn btn-primary">Register</button>
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
