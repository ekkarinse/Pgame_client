import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import loginpic from "../picture/lizardboss.jpg";
import './Blank.css';
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
const Swal = require('sweetalert2')

const Blank = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputRegister, setRegister] = useState({    
        "firstname":"",
        "lastname":"",
        "username":"",
        "password":"",
        "repassword":"",
        "email":"",
        "phone_number":"",
        "age":"",
      });
      const [error, setError] = useState(false);
      const [ isAlertVisible, setIsAlertVisible ] = useState(false);
      const [submitted, setSubmitted] = useState(false);
      const token = localStorage.getItem("token");
      if(token){
        return window.location.href = "/dashboard";
    }else{
      
const register = () =>{
    // e.preventDefault();
   
    // console.log(inputRegister);
    if(inputRegister.firstname === '' || inputRegister.lastname === ''|| inputRegister.username === '' ||
        inputRegister.password === ''|| inputRegister.repassword ==='' || inputRegister.email === '' || inputRegister.phone_number ==='' || inputRegister.age ===''
    ){
        Swal.fire({
            title: 'register failed',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        setError(true);
    }else if(inputRegister.password != inputRegister.repassword){
        Swal.fire({
            title: 'register failed',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        setError(true);

    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRegister.email)){

        Swal.fire({
            title: 'register failed',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        setError(true);
    }
    else{
        console.log(inputRegister);
        axios({
        method:"post",
        url: "http://localhost:3004/users/postusers",
        header:{
          "Content-Type": "application/json",
        },
        data:inputRegister,
      }).then(function(response){
        if(response.data === true){
            setRegister({...inputRegister,
            "firstname":"",
            "lastname":"",
            "username":"",
            "password":"",
            "email":"",
            "phone_number":"",
            "age":"",
        });

        inputRegister.firstname="";
        inputRegister.lastname="";
        inputRegister.username="";
        inputRegister.password="";
        inputRegister.email="";
        inputRegister.phone_number="";
        inputRegister.age="";
        }
        if(response.data.status === 'Ok'){
           
                Swal.fire({
                    title: 'register successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://sweetalert2.github.io/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
                    
                setSubmitted(true);
                setError(false);
            }else {
                Swal.fire({
                    title: 'register failed',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://sweetalert2.github.io/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
                  
    
            }
    
        }).catch(function(error){
            console.log("error");
          })

        
    }
 
}//register

const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <span id="M_error"></span>
      </div>
    );
  };

const errorMessage = () => {

    if(inputRegister.password != inputRegister.repassword){
       
        return (
            <div
                className="error"
             style={{
                 display: error ? '' : 'none',
                }}>
                <span id="M_error">*Please check password and repassword</span>
            </div>
            );
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRegister.email)){

        return (
            <div
                className="error"
             style={{
                 display: error ? '' : 'none',
                }}>
                <span id="M_error">Invalid email address</span>
            </div>
            );
    }else{
    
        return (
        <div
            className="error"
         style={{
             display: error ? '' : 'none',
            }}>
            <span id="M_error">*Please enter all the fields</span>
        </div>
        );
    }
    
  };

    return( 
    <>
    <div className="container-fluid">
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
        <div className='headerpage'>
            <div>
                <img id= "image" src={loginpic} alt="loginpic" width="500" height="600"></img>
            </div>
                <div className='pagelogin'>
                    <div className="container-register">
                        <h2>Register</h2>
                       
                        <form onSubmit={register}>
                        <div className="registerinput">
                        
                                <div className="row">
                                    <div className="col">Username : </div>
                                    <div className="col-6">
                                        <input type="text"  placeholder='??????????????????????????????' className="form-control"                                
                                                value = {inputRegister.username}
                                                onChange={(e)=>{
                                                    setRegister({...inputRegister,username:e.target.value})
                                                }} ></input>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">Password :</div>
                                    <div className="col-6">
                                        <input type="password"  placeholder='????????????????????????' className="form-control" 
                                            value = {inputRegister.password}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,password:e.target.value})
                                            }}></input>
                                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">Re-password : </div>
                                    <div className="col-6">
                                        <input type="password"  placeholder='????????????????????????????????????????????????' className="form-control"
                                            value = {inputRegister.repassword}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,repassword:e.target.value})
                                            }}
                                ></input>
                               
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">Firstname : </div>
                                    <div className="col-6">
                                        <input type="text"  placeholder='????????????' className="form-control"
                                            value = {inputRegister.firstname}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,firstname:e.target.value})
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">Surname : </div>
                                    <div className="col-6">
                                        <input type="text"  placeholder='?????????????????????' className="form-control"
                                            value = {inputRegister.lastname}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,lastname:e.target.value})
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">Email</div>
                                    <div className="col-6">
                                        <input type="email"  placeholder='???????????????' className="form-control"
                                            value = {inputRegister.email}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,email:e.target.value})
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">PhoneNumber</div>
                                    <div className="col-6">
                                        <input type="text"  placeholder='???????????????????????????????????????' className="form-control" size="10" maxLength="10" pattern="[0-9]*"
                                            value = {inputRegister.phone_number}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,phone_number:e.target.value})
                                            }}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">Age : </div>
                                    <div className="col-6">
                                        <input type="number"  placeholder='????????????' className="form-control" size="3" maxLength="3"
                                            value = {inputRegister.age}
                                            onChange={(e)=>{
                                                setRegister({...inputRegister,age:e.target.value})
                                            }}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="term">
                                <text>?????? <u><a onClick={handleShow}>?????????????????????</a></u> ???????????????????????????????????????????????????</text>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" required  type="checkbox"  value="" id="flexCheckDefault"/>
                                    <span class="form-check-label" for="flexCheckDefault">
                                            ???????????????????????????????????????
                                    </span>
                            </div> */}
                            <div className="messages">
                            {errorMessage()}
                            {successMessage()}
                         </div>
                         <br></br>
                            <div className='div-button'>
                                <button type="submit" class="btn btn-warning" size="lg" onClick={register} >Register</button>
                            </div>
                            </form>
                    </div>
                   

                    {/* <Button className="nextButton" onClick={handleShow}>
                        Open Modal
                    </Button> */}

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>?????????????????????</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ?????????????????????????????? ????????????????????????????????????????????? ??? ???????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????? ????????? ??????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????? ????????? ?????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????? ???????????????????????? ???????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????? ???????????????????????????????????????????????????????????????????????? ??? ????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? ????????????????????????????????????????????????????????? ??????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? ???????????????????????? ?????????????????????????????????????????????????????????????????????????????? ????????????????????? ??????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????? ???????????? ???????????????????????? ?????????????????? ???????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????? ???????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????
                            ??????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????</Modal.Body>
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
    }
};

export default Blank;
