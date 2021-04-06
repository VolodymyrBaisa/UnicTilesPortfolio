import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import RadioButtonSelector from "../RadioButtonSelector";

const section = "ifyouhave";

const ifYouHave = [
    { name: "Yes, I already have the tiles", id: "" },
    { name: "No, but I will buy the tiles myself", id: "" },
    { name: "No, I need the professional to buy the tiles for me", id: "" },
];

const IfYouHaveSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">
                Do you already have the tiles for your project?
            </div>
            <div className="context">
                <RadioButtonSelector
                    values={ifYouHave}
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
export default IfYouHaveSelector;
