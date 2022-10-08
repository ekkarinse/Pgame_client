import React , {useState} from 'react'
import axios from "axios";
const moment = require('moment');
export default function App() {

  function testAPI_getall(){
    axios({
      method:"get",
      url: "http://localhost:3004/users/getuser",
      header:{
        "Content-Type": "application/json",
      }
    }).then(function(response){
      console.log(response.data);
      
      //setdata_co
    }).catch(function(error){
      console.log("error");
    })
  }


  return (
    <>
    <div>-----------test-----------</div>
    <button
        type="button"
        onClick={()=>{testAPI_getall();}}>GET</button>
    </>
  );
}