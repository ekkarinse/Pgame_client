// import React from 'react';
import { Link } from "react-router-dom";
import {NavLink, withRouter} from 'react-router-dom'
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import './header.css';
import React , {useState} from 'react'
// import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
// var qs = require('qs');
const Swal = require('sweetalert2')

const Header = ({history,isLogged}) =>{

  const [inputs, setInputs] = useState({    
          "username":"bossza123",
          "password":"2222",
        });

  const handleSubmit = (e) => {

    axios({
      method:"post",
      url: "http://localhost:3004/users/login",
      header:{
        "Content-Type": "application/json",
      },
      data:inputs,
    }).then
    (function(response){
      
      if(response.data === true){
        setInputs({...inputs,"username":"","password":"",});
      inputs.username="";
      inputs.password="";
      }
       console.log(response.data);
      console.log(response.data.status);
      if(response.data.status === 'Ok'){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        }).then((value)=>{
          window.location.href = "/dashboard";
        });

      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Login failed',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }).catch(function(error){
      console.log("error");
    })

  }
 

    return(
      <>
      <section>
        <nav>
            <div className='div-header'>
            <h2>Deep Dark Gyms</h2>
                <div className='headerlogin' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    {/* <form className='headerlogin'> */}
                    <label className='headerlogin' >
                        <input placeholder='ชื่อผู้ใช้' className='input' size="15" type="text" name='username'
                                value = {inputs.username}
                                onChange={(e)=>{
                                setInputs({...inputs,username:e.target.value})
                                }}
                                />
                        &nbsp;
                        <input placeholder='รหัสผ่าน' className='input' size="15"
                                type="password" 
                                name="password" 
                                value = {inputs.password}
                                onChange={(e)=>{
                                setInputs({...inputs,password:e.target.value})
                                }}
                                />
                        &nbsp;&nbsp;
                        {/* <Link to="/dashboard"> */}
                          {/* </Link> */}
                    </label>
                    <button className='button-header' class="btn btn-warning" onClick={()=>{handleSubmit();}}>Login</button>
                    {/* </form> */}
                    {/* <button className='button-header' size="sm"><Link to="/dashboard" class="btn btn-primary" size="sm">Login</Link></button> */}
                </div>
            </div>
        </nav>
        </section>
        </>
    )
}

export default Header;