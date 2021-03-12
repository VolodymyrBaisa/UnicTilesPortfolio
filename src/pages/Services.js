import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";

const Services = () => {
    return (
        <StyledServices>
            <SectionHeader sText={"Our Services"} sColor={"#46423D"} />
        </StyledServices>
    );
};

const StyledServices = styled(motion.div)`
    width: 100vw;
    height: 70rem;
    position: relative;
    z-index: 0;
`;

export default Services;
