import React, {useState} from 'react'
import styled from "styled-components";



const ProductCard = () => {

    
    return (
        <ProductCard>
            <Image>
                <img src="" alt="" />
            </Image>
            <Text>
                <h3 className="productName">Product Name</h3>

                <h3 className="ProductPrice">$ 244.99</h3>
            </Text>
            
            
        </ProductCard>
    )
}

const ProductCard = styled.div`
border-radius: 20px;
width: 200px;

`;
const Image = styled.div`
border-radius: 20px;
width: 200px;

`;
const Text = styled.div`
border-radius: 20px;
width: 200px;

`;
const Price = styled.div`
border-radius: 20px;
width: 200px;

`;

export default ProductCard
