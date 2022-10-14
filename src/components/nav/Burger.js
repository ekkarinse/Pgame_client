import { push as Menu } from 'react-burger-menu';
import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import pic from "../../picture/4663114.png";
import "./burger.css"

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        {/* <img className='burger' id= "image" src={pic} alt="loginpic" width="70" height="60" onClick={<Sidebar></Sidebar>}></img>  */}
        <Sidebar></Sidebar>
      </Menu>
    );
  }
}
export default Burger;