import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import RadioButtonSelector from "../RadioButtonSelector";

const section = "squares";

const squares = [
    { name: "Less than 25 sq ft", id: "" },
    { name: "25 - 50 sq ft", id: "" },
    { name: "51 - 100 sq ft", id: "" },
    { name: "101 - 200 sq ft", id: "" },
    { name: "201 - 300 sq ft", id: "" },
    { name: "Other squares size", id: "other" },
];

const PlaceSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">
                Approximately how many square feet is the area that needs
                tiling?
            </div>
            <div className="context">
                <RadioButtonSelector
                    values={squares}
                    section={section}
                    questState={questState}
                    setQuestState={setQuestState}
                />
            </div>
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
    }
    .context {
        padding-top: 2rem;
    }
`;
export default PlaceSelector;
