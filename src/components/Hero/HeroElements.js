import styled from 'styled-components';
import ImgBg from '../../images/banner.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const HeroH2=styled.h2`
font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
font-weight:400;
`;
export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 3rem);
  margin-bottom: 1.5rem;
  font-family:Lato;
  letter-spacing:1px;
  // box-shadow: 3px 5px #e9ba23;
  line-height: 2.9rem;
  font-weight:600;
`;

export const HeroP = styled.p`
font-size:1rem;
color:#D1D0CE;
margin-bottom: 2rem;
font-family:sans-serif;
`;


export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
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