import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
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
        <StyledSelector>
            <div className="header">What material is the subfloor made of?</div>
            <RadioButtonSelector
                values={material}
                section={section}
                questState={questState}
                setQuestState={setQuestState}
            />
        </StyledSelector>
    );
};
const StyledSelector = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header {
        font-size: 3.3rem;
        font-weight: bold;
        margin: 2rem 0;
        color: #2f3033;
        text-align: center;
        letter-spacing: 0.04em;
    }

    @media screen and (max-width: 600px) {
        .header {
            margin: 6.5rem 0 2rem 0;
        }
    }
`;
export default MaterialSelector;
