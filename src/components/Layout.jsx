import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './navbar/Navbar'
import styled from "styled-components";

export function Layout({ children, cartItems }) {
  return (
    <Box mb={16}>
      <Navbar />
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}

const Container = styled.ul`
padding: 17vh 8% 0;

`;
