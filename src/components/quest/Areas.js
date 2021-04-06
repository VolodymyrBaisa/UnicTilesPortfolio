import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
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
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">What areas need tiling work?</div>
            <div className="context">
                <CheckBoxSelector
                    values={areas}
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
export default AreasSelector;
