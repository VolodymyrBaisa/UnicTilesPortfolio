import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
    initial: {
        background: "linear-gradient(90deg, #FDF6F9 0%, #EBB02D 0%), #EBB02D",
    },
    whileHover: {
        background:
            "linear-gradient(90deg, #FDF6F9 100%, #EBB02D 100%), #EBB02D",
    },
    transition: {
        duration: 0.5,
    },
};

const Button = ({ text, link }) => {
    return (
        <StyledButton
            variants={animation}
            initial={"initial"}
            whileHover={"whileHover"}
            transition={"transition"}
        >
            <div>{text}</div>
        </StyledButton>
    );
};

const StyledButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    div {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.8rem;
        padding: 0.7em 2em;
        color: #46423d;
    }
`;

export default Button;
