import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";

const Start = () => {
    return (
        <StyledStart
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">
                <p>Tell us about your project for more</p>
                <p>accurate const estimate.</p>
            </div>
            <div className="text">
                A little info will help understand your project.
            </div>
        </StyledStart>
    );
};

const StyledStart = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        font-size: 3.3rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #2f3033;
        text-align: center;
        letter-spacing: 0.04em;
    }

    .text {
        font-size: 2rem;
        color: #676d73;
        text-align: center;
        letter-spacing: 0.04em;
    }
`;

export default Start;
