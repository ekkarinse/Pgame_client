import React from 'react';
import { Link } from "react-router-dom";
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import './header.css';
const Header = ({history,isLogged}) =>{
    return(
        <nav>
            <div className='div-header'>
            <h1>Deep Dark Gyms</h1>
                <div className='headerlogin' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <form className='headerlogin'>
                    <label className='headerlogin' >
                        <input type="text" placeholder='ชื่อผู้ใช้' className='input' size="12"/>
                        &nbsp;
                        <input type="text" placeholder='รหัสผ่าน' className='input' size="12"/>
                        &nbsp;
                        <button className='button-header'><Link to="/dashboard" class="btn btn-primary">Login</Link></button>
                    </label>
                    </form>
                    {/* <button className='button-header' size="sm"><Link to="/dashboard" class="btn btn-primary" size="sm">Login</Link></button> */}
                </div>
            </div>
        </nav>
    )
}

export default Header;