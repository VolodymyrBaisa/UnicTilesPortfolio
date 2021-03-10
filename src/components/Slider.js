import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Img
import slider from "../img/placeholder/rectangle.png";
//Mask
import sliderMask from "../img/svg/slider_mask.svg";

const Slider = () => {
    return (
        <StyledSlider>
            <img className="slider-item" src={slider} alt="" />
        </StyledSlider>
    );
};

const StyledSlider = styled(motion.div)`
    position: absolute;
    top: 4rem;
    left: 0;
    height: 94.5vh;
    width: 100%;
    .slider-item {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center bottom;
        mask-image: url(${sliderMask});
        mask-size: 100vw 94.5vh;
        mask-repeat: no-repeat;
        mask-position: center;
    }
`;

export default Slider;
