import styled from 'styled-components';
import {NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
    background:transparent;
    height:80px;
    display:flex;
    justify-content:center;
    font-weight:700;
`;

export const NavLink = styled(Link)`
    color:#737CA1;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;

    @media scree and (max-width : 400px){
        position: absoluted;
        top:10px;
        left:25px;
    }
`;
export const NavIcon = styled.div`
    display:block;
    position:absolute;
    top:0;
    right:0;
    cursor: pointer;
    color:#fff;

    p{
       transform:translate(-175%,100%);
       font-weight:bold; 
    }
`;
export const Menu=styled.p`
    color:#737CA1;
    font-size:2rem;
`;

export const Bars =styled(FaPizzaSlice)`
    color:#737CA1;
    font-size:3rem;
    transform:translate(-50%, -50%);
`;

export const CartLink=styled(Link)`
color:#fff;
font-size:1.5rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
margin-left:10px;

@media scree and (max-width : 400px){
    position: absoluted;
    top:10px;
    left:25px;
}
`;