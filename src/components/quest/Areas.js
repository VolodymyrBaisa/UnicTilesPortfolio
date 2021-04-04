import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import CheckBoxSelector from "../CheckBoxSelector";

const section = "areas";

const areas = [
    { name: "Floor", id: "" },
    { name: "Backsplash", id: "" },
    { name: "Tub / Shower enclosure", id: "" },
    { name: "Wall", id: "" },
    { name: "Countertop", id: "" },
    { name: "Other area (please describe)", id: "other" },
];

const AreasSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector>
            <div className="header">What areas need tiling work?</div>
            <CheckBoxSelector
                values={areas}
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
export default AreasSelector;
