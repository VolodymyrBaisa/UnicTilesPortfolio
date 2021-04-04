import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
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
        <StyledSelector>
            <div className="header">
                What type of tile are you interested in?
            </div>
            <RadioButtonSelector
                values={ifYouHave}
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
export default IfYouHaveSelector;
