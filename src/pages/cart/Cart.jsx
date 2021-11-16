import React from 'react'
import styled from "styled-components";

const Cart = () => {
    return (
        <Cont>
            
        </Cont>
    )
}

const Cont = styled.div`

`;

const ProductCard = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;

&:hover {
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
}
`;
const Image = styled.div`

`;
const Text = styled.div`
grid-template-columns: repeat(1, 1fr);
grid-gap: 10px;
`;
const Amount = styled.div`

`;
const TotalAmount = styled.div`

`;

export default Cart
