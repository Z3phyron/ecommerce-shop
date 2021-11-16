import React, { createContext, useContext, useEffect, useState } from "react";
import { db, storage } from "../utils/init-firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { linkWithPopup } from "@firebase/auth";

const productsRef = collection(db, "products");

export const CreateProd = async (
  productName,
  productDesc,
  productPrice,
    productBy,
  imageUrl,
  // product
) => {
  await addDoc(productsRef, {
    productName: productName,
    productDesc: productDesc,
      productPrice: productPrice,
    productImage: imageUrl,
    productType: "clothing",
    productBy: productBy,
    // productId: doc.id,
  });
};





export const Data = () => {
  const [products, setProducts] = useState([]);
  const productRef = collection(db, "products")

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productRef)
      setProducts(data.docChanges.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getProducts()
  }, [products])

}

// export default Data

// const useStorage = (productImage) => {
//   const [url, setUrl] = useState(null);

//   useEffect(() => {
//     // const storageRef = storage.ref(productImage.name)
//     // Upload file and metadata to the object 'images/mountains.jpg'
//     const storageRef = ref(storage, "images/" + productImage.name);
//     const uploadTask = uploadBytesResumable(storageRef, productImage);

//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//       },
//       (error) => {},
//       () => {
//         // Upload completed successfully, now we can get the download URL
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//               const link = downloadURL
//               setUrl(link)
//           console.log("File available at", downloadURL);
//         });
//       }
//     );
//   }, [productImage, url]);
// };


// export default useStorage