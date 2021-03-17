import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
    start: {
        background: "linear-gradient(90deg, #FDF6F9 0%, #EBB02D 0%), #EBB02D",
    },
    hover: {
        background:
            "linear-gradient(90deg, #FDF6F9 100%, #EBB02D 100%), #EBB02D",
    },
    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1,
        },
    },
    transition: {
        duration: 0.5,
    },
};

const Button = ({ text, fontSize, link }) => {
    return (
        <StyledButton
            bFontSize={fontSize}
            variants={animation}
            initial="start"
            whileHover="hover"
            whileTap="tap"
            transition="transition"
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
    div {
        text-transform: uppercase;
        font-weight: 700;
        font-size: ${(props) => (props.bFontSize ? props.bFontSize : "1.8rem")};
        padding: 0.7em 2em;
        color: #46423d;
    }
`;

export default Button;
