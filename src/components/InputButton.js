import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
    start: {
        background: "linear-gradient(180deg, #FDF6F9 0%, #EBB02D 0%), #EBB02D",
    },
    hover: {
        background:
            "linear-gradient(180deg, #FDF6F9 93%, #EBB02D 93%), #EBB02D",
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
//default 0 is success 1 if error 2
const InputButton = ({ fontSize, success = 0 }) => {
    return (
        <StyledInputButton
            bFontSize={fontSize}
            variants={animation}
            initial="start"
            whileHover="hover"
            whileTap="tap"
            transition="transition"
        >
            {success === 0 && <input type="submit" value="Send" />}
            {success === 1 && <div className="success">Success</div>}
            {success === 2 && <div className="error">Error</div>}
        </StyledInputButton>
    );
};

const StyledInputButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    input,
    .success,
    .error {
        all: unset;
        text-transform: uppercase;
        font-weight: 700;
        font-size: ${(props) => (props.bFontSize ? props.bFontSize : "1.8rem")};
        padding: 0.7em 2em;
        width: 100%;
        text-align: center;
        color: #46423d;
        border: 0.1rem solid #ebb02d;
        border-radius: 0.5rem;
    }

    .success {
        color: green;
    }
    .error {
        color: red;
    }
`;

export default InputButton;
