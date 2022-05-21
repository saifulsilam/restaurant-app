import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroH2,
    HeroP,
    HeroBtn
} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] =useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH2>___ We are the best</HeroH2>
                    <HeroH1>Forget Mediocre Restaurant</HeroH1>
                    <HeroP>When,while the lovely valley teems with vapour around me, and the meridian sun strikes upper surface.</HeroP>
                    
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
