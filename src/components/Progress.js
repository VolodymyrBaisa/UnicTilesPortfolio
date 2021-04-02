import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const transition = {
    duration: 0.5,
    ease: "easeInOut",
};

const variants = {
    enter: {
        width: 0,
    },
    animate: (custom) => ({
        width: custom + "%",
        transition,
    }),
};

const Progress = ({ value, max }) => {
    return (
        <StyledProgress value={value} max={max}>
            <motion.span
                className="progress-value"
                variants={variants}
                custom={(value * 100) / max}
                initial="enter"
                animate={"animate"}
            />
        </StyledProgress>
    );
};

const StyledProgress = styled(motion.div)`
    width: 100%;
    height: 0.5rem;
    background-color: #eee;
    border-radius: 1rem;

    .progress-value {
        display: block;
        height: 100%;
        width: 100%;
        background: -webkit-linear-gradient(
                top,
                rgba(255, 255, 255, 0.25),
                rgba(0, 0, 0, 0.25)
            ),
            #ebb02d;
        border-radius: 1rem;
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }
`;

export default Progress;
