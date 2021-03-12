import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHeader = ({ sText, sColor }) => {
    return <StyledSectionHeader></StyledSectionHeader>;
};

const StyledSectionHeader = styled(motion.div)`
    text-transform: uppercase;
`;

export default SectionHeader;
