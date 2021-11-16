import React from "react";
import {
  //   Badge,
  //   chakra,
  //   Code,
  Heading,
  // Text,
  //   List,
  //   ListItem,
  //   OrderedList,
} from "@chakra-ui/react";
import styled from "styled-components";
import Slide from "../../helpers/Carousel";
import { Link } from "react-router-dom";
import { useDb } from "../../contexts/DbContext";


const Featured = () => {

  const {products} = useDb()
  return (
    <Cont>
      <Heading>
        <Text>Featured Products</Text>
      </Heading>
      <Slide>
        {products && products.map((product) => {
          return (
              <Link to={`/product/${product.id}` }  key={product.id}>
              <Card>
                <Image>
                  <img src={product.productImage} alt="" />
                </Image>
                <Text>
                  <h3 className="productName">{product.productName}</h3>
                  <h3 className="ProductPrice">{product.productPrice}</h3>
                </Text>
              </Card>
            </Link>
          );
        })}
      </Slide>
    </Cont>
  );
};

const Cont = styled.div`
padding: 5vh 0;

/* square buttons */
.rec.rec-arrow {
  display: none;
}

.rec.rec-dot {
  display: none;
}
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 200px;
`;
const Text = styled.div`
  padding: 10px;
  .productName {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .productPrice {
    font-size: 24px;
    color: var(--Color-3);
  }
`;
const Desc = styled.p``;
const Image = styled.div`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  img {
    width: 100%;
  }
`;

export default Featured;
