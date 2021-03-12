import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Services = () => {
    return <StyledServices></StyledServices>;
};

const StyledServices = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 0;
`;

export default Services;
