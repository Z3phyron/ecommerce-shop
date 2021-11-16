import React, { useState, useEffect } from "react";
import {
  //   Badge,
  //   chakra,
  //   Code,
  Heading,
  Text,
  //   List,
  //   ListItem,
  //   OrderedList,
} from "@chakra-ui/react";
// import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout";
import Showcase from "./Showcase";
import Featured from "./Featured";
import { collection, getDocs } from "firebase/firestore";
// import Data from "../../contexts/db";
import { db } from "../../utils/init-firebase";

// import { useAuth } from '../../contexts/AuthContext';

const Home = () => {
  // const {currentUser} = useAuth()

  return (
    <Layout>
      {/* <Heading>Home page</Heading>
        <Text my={6}>{currentUser?.email}</Text> */}
      <Showcase />
      <Featured />
    </Layout>
  );
};

export default Home;
