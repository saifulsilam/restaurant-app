import React from 'react';
import { useStateValue } from '../../StateProvider';
import {Bars, Nav, NavIcon, NavLink,Menu,CartLink} from './NavbarElement';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const Navbar = ({toggle}) => {
    const [{ basket, user }] = useStateValue();
    return (
        <>
           <Nav>
               <NavLink to="/">Dawkin-Restora</NavLink>
           
               <NavIcon onClick={toggle}>
                   <Menu>Menu</Menu>
                   <CartLink to="/checkout">
                   ({basket?.length})
                   </CartLink>
                   <Bars /> 
                  
                   
                   
                  
               </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
