import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import RadioButtonSelector from "../RadioButtonSelector";

const section = "typeoftile";

const material = [
    { name: "Ceramic", id: "" },
    { name: "Porcelain", id: "" },
    { name: "Natural Stone", id: "" },
    { name: "Mosaic", id: "" },
    { name: "I'm not sure what type of tile", id: "" },
    { name: "Other type of tile (please describe)", id: "other" },
];

const TypeOfTileSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">
                What type of tile are you interested in?
            </div>
            <div className="context">
                <RadioButtonSelector
                    values={material}
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
export default TypeOfTileSelector;
