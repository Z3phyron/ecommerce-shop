import React from "react";
import styled from "styled-components";
import img from "../../images/Showcase.png"

const Showcase = () => {
  return (
    <Cont>
      <Text>
        <Title>New Product</Title>
        <Desc>Thug Life Collection</Desc>
      </Text>
          <Image>
              <img src={img} alt="" />
      </Image>
    </Cont>
  );
};

const Cont = styled.div`
  border-radius: 30px;
  display: grid;
  grid-template-columns: 60% auto;
  align-items: center;
  padding: 10vh 5%;
  background: var(--Color-2);
  grid-gap: 20px;

  @media (max-width: 500px ) {
      grid-template-columns: 100%;
  }
`;
const Text = styled.div`

`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 990px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
const Desc = styled.p`
  font-size: 50px;
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
const Image = styled.div`
  text-align: center;
  /* @media (max-width: 500px) {
    display: none;
  } */

  img {
    width: 300px;
    @media (max-width: 990px) {
      width: 250px;
    }
    @media (max-width: 800px) {
      width: 200px;
    }
  }
`;

export default Showcase;
