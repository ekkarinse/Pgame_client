import React , {useState} from 'react'
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blank from './page/Blank';
import Dashboard from './page/Dashboard';
import Trainer from './page/Trainer';
import Member from './page/Member';
import Whey from './page/Whey';
import AppLayout from './components/layout/AppLayout';
import AppHeader from './components/layout/AppHeader';
import './App.scss';
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
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppHeader />}>
                    <Route path='/' element={<Blank />}/>
                </Route>
                {/* <Route path='/dashboard' element={<Dashboard />}/> */}
                {/* <Route path='/dashboard' element={<AppHeader />}> */}
                <Route path='/dashboard' element={<AppLayout />}>
                    <Route path='/dashboard' element={<Dashboard />}/>
                </Route>
                {/* </Route> */}
                <Route path='/trainer' element={<AppLayout />}>
                    <Route path='/trainer' element={<Trainer />} />
                </Route>
                <Route path='/wheyprotein' element={<AppLayout />}>
                    <Route path='/wheyprotein' element={<Whey />} />
                </Route>
                <Route path='/Member' element={<AppLayout />}>
                    <Route path='/Member' element={<Member />} />
                </Route>
                <Route path='/history' element={<AppLayout />}>
                    <Route path='/history' element={<history />} />
                </Route>
            </Routes>
            
        </BrowserRouter>
    {/* <div>-----------test-----------</div>
    <button
        type="button"
        onClick={()=>{testAPI_getall();}}>GET</button> */}
    </>
  );
}