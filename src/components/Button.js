import React from "react";
import { Link } from "react-router-dom";
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
            <Link className="link" to={link}>
                <div>{text}</div>
            </Link>
        </StyledButton>
    );
};

const StyledButton = styled(motion.div)`
    border-radius: 0.5rem;
    .link {
        width: 100%;
        height: 100%;
        text-decoration: none;

        div {
            text-transform: uppercase;
            width: 100%;
            font-weight: 700;
            font-size: ${(props) =>
                props.bFontSize ? props.bFontSize : "1.8rem"};
            padding: 0.7em 2em;
            color: #46423d;
            pointer-events: none;
            text-align: center;
        }
    }
`;

export default Button;
