import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Button from "../components/Button";

const GetQuoteBox = () => {
    return (
        <StyledGetQuoteBox>
            <Button text={"Get free quote"} link={"#"} />
        </StyledGetQuoteBox>
    );
};

const StyledGetQuoteBox = styled(motion.div)`
    background: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 2rem;
`;

export default GetQuoteBox;
