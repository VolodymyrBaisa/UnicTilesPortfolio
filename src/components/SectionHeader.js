import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
const SectionHeader = ({ sText, sColor }) => {
    return <StyledSectionHeader sColor={sColor}>{sText}</StyledSectionHeader>;
};

const StyledSectionHeader = styled(motion.div)`
    position: relative;
    font-weight: 800;
    font-size: 3.8rem;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: ${(props) => props.sColor};
    margin-bottom: 4.5rem;

    &:before {
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        content: "";
        margin: 5rem auto;
        width: 10rem;
        background: #ebb02d;
        height: 0.5rem;
    }
`;

export default SectionHeader;
