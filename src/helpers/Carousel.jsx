import React from 'react'
import Carousel from "react-elastic-carousel";
import styled from "styled-components"


const Slide = (props) => {
    const {children} = props
    return (<Carousel itemsToShow={4}>{children}</Carousel>);
}



export default Slide
