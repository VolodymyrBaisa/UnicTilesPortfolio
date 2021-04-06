import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import RadioButtonSelector from "../RadioButtonSelector";

const section = "material";

const material = [
    { name: "I'm not sure what material", id: "" },
    { name: "Concrete", id: "" },
    { name: "Drywall", id: "" },
    { name: "Wood", id: "" },
    { name: "Brick", id: "" },
    { name: "Durock", id: "" },
    { name: "Other material (please describe)", id: "other" },
];

const MaterialSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">What material is the subfloor made of?</div>
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
export default MaterialSelector;
