import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

import styled from "styled-components";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { CreateProd } from "../../contexts/db";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/init-firebase";



const AddProducts = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productBy, setProductBy] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleImage = (e) => {
    const selected = e.target.files[0];
     setProductImage(selected);

   
  };



      // const storageRef = storage.ref(productImage.name)
      // Upload file and metadata to the object 'images/mountains.jpg'



  


  const onSubmit = (e) => {
    e.preventDefault();

          const storageRef = ref(storage, "images/" + productImage.name);
          const uploadTask = uploadBytesResumable(storageRef, productImage);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
            },
            (error) => {},
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const link = downloadURL;
                setImageUrl(link);
                console.log("File available at", downloadURL);
              });
            }
          );
  
    console.log(imageUrl)


    CreateProd(productName, productDesc, productPrice, productBy, imageUrl);

  };
  return (
    <Layout>
      <Cont>
        <Heading textAlign="center" my={12}>
          Add Product
        </Heading>
        <Card maxW="md" mx="auto" mt={4}>
          <chakra.form onSubmit={onSubmit}>
            <Stack spacing="6">
              <FormControl id="productImage">
                <FormLabel>Product Image</FormLabel>
                <Button className="fileBtn">
                  <Input
                    name="productImage"
                    type="file"
                    onChange={handleImage}
                    className="fileinput"
                  />
                </Button>
              </FormControl>
              <FormControl id="productName">
                <FormLabel>Product Name</FormLabel>
                <Input
                  name="productName"
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormControl>
              <FormControl id="productDesc">
                <FormLabel>Product Desc</FormLabel>
                <Input
                  name="productDes"
                  type="text"
                  required
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                />
              </FormControl>
              <FormControl id="productBy">
                <FormLabel>Product By</FormLabel>
                <Input
                  name="productBy"
                  type="text"
                  required
                  value={productBy}
                  onChange={(e) => setProductBy(e.target.value)}
                />
              </FormControl>
              <FormControl id="productPrice">
                <FormLabel>Product Price</FormLabel>
                <Input
                  name="productPrice"
                  type="number"
                  required
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="pink"
                size="lg"
                fontSize="md"
                isLoading={isSubmitting}
              >
                Add
              </Button>
            </Stack>
          </chakra.form>
        </Card>
      </Cont>
    </Layout>
  );
};

const Cont = styled.div`
  padding: 20px;

  .fileBtn {
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      display: none;
    }
  }
`;
// const  = styled.div`
// padding: 20px;
// `;
// const Cont = styled.div`
// padding: 20px;
// `;
// const Cont = styled.div`
// padding: 20px;
// `;

export default AddProducts;
