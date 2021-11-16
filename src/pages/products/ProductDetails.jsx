import { collection, getDocs } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { db } from "../../utils/init-firebase";
import { Center, Square, Circle, Spinner, Button } from "@chakra-ui/react";
import { useDb } from "../../contexts/DbContext";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';



const ProductDetails = (props) => {
  const { products } = useDb();
  const [product, setProduct] = useState([]);

  const {currentUser} = useAuth()
  console.log(currentUser)

  const uid = currentUser?.uid

  console.log(uid)

  const id = props.match.params.id;

  useEffect(() => {
    const getProduct = () => {
      const Sproduct = products.find((pd) => pd.id === id);
      setProduct(Sproduct);
      console.log(product);
    };
    getProduct();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const cart = async (item) => {
      await setDoc(doc(db, `cart/${uid}`), item)
  }

  const onAdd =  (prod) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if  (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
const item = { ...product, qty: 1 }

      setCartItems(
        [...cartItems, item]
        // product.id
      );
      
      // Add a new document in collection "cities"
        cart(item)
    }
  };

  console.log("cart items ", cartItems);

  console.log(product);
  if (product) {
    return (
      <Layout>
        <Cont>
          <Product>
            <Image>
              <img src={product.productImage} alt="" />
            </Image>
            <Details>
              <ProductName>{product.productName}</ProductName>
              <ProductBy>{product.productBy}</ProductBy>
              <ProductDesc>{product.productDesc}</ProductDesc>
              <AddToCart>
                <Button onClick={onAdd}>Add to Cart</Button>
              </AddToCart>
            </Details>
          </Product>
        </Cont>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Center color="white">
          <Spinner size="xl" />
        </Center>
      </Layout>
    );
  }
}

const Cont = styled.div``;
const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;
const ProductName = styled.div`
 font-size: 40px;
 text-transform: capitalize;
 margin-bottom: 20px;
`;
const ProductBy = styled.div`
  font-size: 22px;
   margin-bottom: 20px;
`;
const ProductDesc = styled.div`
  font-size: 20px;
   margin-bottom: 20px;
`;
const AddToCart = styled.div`
  font-size: 10px;
`;

const Image = styled.div`
  border-radius: 20px;
  width: 350px;
  object-fit: cover;
 overflow: hidden;

  img {
    width: 100%;
  }
`;
const Details = styled.div`
  border-radius: 20px;
  width: 200px;
`;
const Price = styled.div`
  border-radius: 20px;
  width: 200px;
`;

export default ProductDetails;
