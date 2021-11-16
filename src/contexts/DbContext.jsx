import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../utils/init-firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { linkWithPopup } from "@firebase/auth";

const DbContext = createContext({
    products: null,
    // product: null
  // onAdd: () => Promise,
});

export const useDb = () => useContext(DbContext);

 const DbContextProvider = ( {props,  children }) => {
   const [product, setProduct] = useState([]);
   const [products, setProducts] = useState([]);
   const productRef = collection(db, "products");
//    const id = props.match.params.id;

   useEffect(() => {
     const getProducts = async () => {
       const data = await getDocs(productRef);
       setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       console.log(products);
     };
     getProducts();
   }, []);

//    useEffect(() => {
//      const getProduct = async () => {
//        const Sproduct = products.find((pd) => pd.id === id);
//        setProduct(Sproduct);
//        console.log(product);
//      };
//      getProduct();
//    }, [product]);




   const value = {
    //  product,
     products,
    //  onAdd
   };
   return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
 };

export default DbContextProvider;
