import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Button from "../components/Button";

const GetQuoteBox = ({ btnText, btnLink, qHeder, qText }) => {
    return (
        <StyledGetQuoteBox>
            <Button text={btnText} link={btnLink} />
            <h2>{qHeder}</h2>
            <p>{qText}</p>
        </StyledGetQuoteBox>
    );
};

const StyledGetQuoteBox = styled(motion.div)`
    background: rgba(0, 0, 0, 0.6);
    padding: 4rem 2rem 2rem 2rem;

    h2 {
        font-size: 1.6rem;
        text-align: center;
        color: #fdf6f9;
        line-height: 1.5em;
        margin: 2em 0 1em 0;
    }

    p {
        font-size: 1.4rem;
        color: #fdf6f9;
        margin-top: 0.5em;
        white-space: pre-line;
    }
`;

export default GetQuoteBox;
