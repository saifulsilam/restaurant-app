import React from 'react';
import { useStateValue } from '../../StateProvider';


import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductElements';

const Products = ({ heading, data }) => {
  const [{ basket }, dispatch] = useStateValue();
   const addToBasket = (item) => {
    dispatch({
      type:'ADD_TO_BASKET' ,
      item:{
           id:item.id,
           title:item.name,
           image: item.img,
           price : item.price,
          
      },
  });
   };
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
 
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>${product.price}</ProductPrice>
                <ProductButton onClick={()=>addToBasket(product) }>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;