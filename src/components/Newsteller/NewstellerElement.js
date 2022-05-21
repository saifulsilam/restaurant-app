import styled from 'styled-components';

export const NewstellerContaner = styled.div`
  background-color: #3B3131;
  width:100%;
  display: flex;
  align-items: center;
  flex-direction : column;
  padding-top:4rem;
  padding-bottom:7rem;

`;

export const ContactHeading=styled.p`
font-size:2.5rem;
color:#D1D0CE;
margin-bottom: 2rem;
font-family:sans-serif;
text-align: center;
`;
export const ContactBox=styled.div`
    backgorund-color:#fff;
  
`;

export const SubscribeBtn =styled.button`
        font-size: 1.4rem;
        padding: 0.5em 2.5rem;
        border: none;
        background: #e31837;
        color: #fff;
        transition: 0.2s ease-out;

        &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
        }
`;
export const Input = styled.input`
  padding: 1em 7em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size:1rem;
  &::-webkit-input-placeholder {
    color: black;
    font-size:1.2rem
  }
`;