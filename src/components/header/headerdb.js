import React from 'react';
// import { Link } from "react-router-dom";
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import './headerdb.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import loginpic from "../../picture/lizardboss.jpg";
import pic from "../../picture/4663114.png";
import Burger from "../nav/Burger";
const Header = ({history,isLogged}) =>{
    return(
        <nav>
            <div className='div-headerdb'>
            {/* <img className='burger' id= "image" src={pic} alt="loginpic" width="70" height="60" onClick={Burger}></img> */}
            {/* <h2>Deep Dark Gyms</h2> */}
                {/* <div className='headerlogin' style={{display:'flex',flexDirection:'row',alignItems:'center'}}> */}
                    <form>
                    <label>
                    <div className='pic' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img className='imageset' id= "image" src={loginpic} alt="loginpic" width="70" height="60"></img>
                        &nbsp;&nbsp;&nbsp;
                        <div class="namedb">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <l1 class="name">นายพสธร ภูมิคำ</l1>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/"><button className='button-header' class="btn btn-warning">Logout</button></Link>
                    </div>
                    </label>
                    </form>
                    {/* <button className='button-header' size="sm"><Link to="/dashboard" class="btn btn-primary" size="sm">Login</Link></button> */}
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Header;