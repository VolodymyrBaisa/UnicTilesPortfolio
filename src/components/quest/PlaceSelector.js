import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import CheckBoxSelector from "../CheckBoxSelector";

const section = "places";

const places = [
    { name: "Kitchen", id: "" },
    { name: "Bathroom", id: "" },
    { name: "Hallway", id: "" },
    { name: "Outside patio", id: "" },
    { name: "Entranceway", id: "" },
    { name: "Living room", id: "" },
    { name: "Pool", id: "" },
    { name: "Other place", id: "other" },
];

const PlaceSelector = ({ questState, setQuestState }) => {
    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">Where is the tile work being done?</div>
            <div className="context">
                <CheckBoxSelector
                    values={places}
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
