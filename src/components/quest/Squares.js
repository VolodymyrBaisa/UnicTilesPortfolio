import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
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
        <StyledSelector>
            <div className="header">
                Approximately how many square feet is the area that needs
                tiling?
            </div>
            <RadioButtonSelector
                values={squares}
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
export default PlaceSelector;
