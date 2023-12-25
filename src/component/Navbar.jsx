import {React} from "react";
import './Navbar.css';
import logo from '../images/logo.png';
import Router  from './Router';
import {  NavLink } from "react-router-dom";



const Navbar = ()=>{

  return(
  <>
     <div id="container">
        <div id="navlist" >
            <ul>
                <li><NavLink className="navlink" to="/popular">Popular</NavLink></li>
                <li><NavLink className="navlink" to="/toprated" >Top Rated</NavLink></li>
                <li><NavLink className="navlink" to={"/upcomming"} >UpComming</NavLink></li>
            </ul>
        </div>
        <div id="searchtag">
        <img src={logo} className="logo"></img>
        <div id="searchbutton" >
            <input id="input" type="text" placeholder="Search..." />
            <button id="search" type="submit">Search</button>
        </div>
        </div>
        
     </div>
     <Router/>
   </>
   )
}

export default Navbar;