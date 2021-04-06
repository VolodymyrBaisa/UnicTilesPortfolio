import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import Textarea from "../Textarea";

const section = "description";

const Description = ({ questState, setQuestState }) => {
    const saveValues = (value) => {
        if (value || value === "") {
            setQuestState({
                ...questState,
                [section]: value,
            });
        }
    };

    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">What other info should we pass along?</div>
            <div className="text">
                Additional details help pros provide the right recommendations,
                prices and service.
            </div>
            <Textarea
                name="message"
                value={(questState && questState[section]) || ""}
                callback={(text) => {
                    saveValues(text);
                }}
            />
        </StyledSelector>
    );
};
const StyledSelector = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .header {
        font-size: 3.3rem;
        font-weight: bold;
        color: #2f3033;
        text-align: center;
        letter-spacing: 0.04em;
        margin-bottom: 2rem;
    }

    .text {
        font-size: 2rem;
        color: #676d73;
        text-align: center;
        letter-spacing: 0.04em;
        margin-bottom: 3rem;
    }
`;
export default Description;
