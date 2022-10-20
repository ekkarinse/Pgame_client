import React from 'react';
// import { Link } from "react-router-dom";
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import './headerdb.css';
import { useEffect, useRef, useState } from 'react';
import {useLocation, useNavigate, Link } from 'react-router-dom';
import loginpic from "../../picture/lizardboss.jpg";
import pic from "../../picture/4663114.png";
import Burger from "../nav/Burger";
import axios from "axios";
// const appToken = await getData('token')

const Header = ({history,isLogged}) =>{
    const [inputUsers, setUsers] = useState({});

    const token = localStorage.getItem("token");
if(!token){
    return window.location.href = "/";
}else{
    
    const check_token = () =>{
        axios({
            method:"post",
            url: "http://localhost:3004/users/authen",
            headers:{
                Authorization:'Bearer '+ token,
            },
            data:inputUsers,
            }).then((response)=>{
                // console.log(response.data.decoded.firstname)
                document.getElementById("account_name").innerHTML = response.data.decoded.firstname +" "+response.data.decoded.lastname;
                
            })
    
        }
        check_token();



    const Logout = (e) => {
        localStorage.removeItem('token')
    }
    

    return(
    <>
    
        <nav>
            <div className='div-headerdb'>
                    <form>
                    <label>
                    <div className='pic' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img className='imageset' id= "image" src={loginpic} alt="loginpic" width="70" height="60"></img>
                        &nbsp;&nbsp;&nbsp;
                        <div class="namedb">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <l1 class="name" id="account_name" ></l1>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div>
                        <Link to="/"><button className='button-header' class="btn btn-warning" onClick={Logout}>Logout</button></Link>
                        </div>
                    </div>
                    </label>
                    </form>
                    {/* <button className='button-header' size="sm"><Link to="/dashboard" class="btn btn-primary" size="sm">Login</Link></button> */}
                </div>
            {/* </div> */}
        </nav>
       
        </>
    )
    }
}
export default Header;