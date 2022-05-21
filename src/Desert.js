import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import "./Desert.css";

function Desert() {
    const [isOpen, setIsOpen] =useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div className="desert-container">
            <div className="desert-nav">
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            </div>
            <h1>Desert</h1>
         
        </div>
    )
}

export default Desert
