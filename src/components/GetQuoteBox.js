import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Button from "../components/Button";

const getQuoteBoxAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transform: {
            duration: 0.5,
            type: "tween",
        },
    },
};

const GetQuoteBox = ({ btnText, btnLink, qHeder, qText }) => {
    return (
        <StyledGetQuoteBox
            variants={getQuoteBoxAnimation}
            initial="hidden"
            animate="visible"
        >
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
        font-size: 2rem;
        text-align: center;
        color: #fdf6f9;
        line-height: 1.5em;
        margin: 2em 0 0 0;
        text-transform: uppercase;
    }

    p {
        font-size: 1.6rem;
        color: #fdf6f9;
        white-space: pre-line;
    }
`;

export default GetQuoteBox;
