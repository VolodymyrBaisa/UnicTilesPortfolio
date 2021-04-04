import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import CheckBoxSelector from "../CheckBoxSelector";

const section = "places";

const places = [
    { placeName: "Kitchen", id: "" },
    { placeName: "Bathroom", id: "" },
    { placeName: "Hallway", id: "" },
    { placeName: "Outside patio", id: "" },
    { placeName: "Entranceway", id: "" },
    { placeName: "Living room", id: "" },
    { placeName: "Pool", id: "" },
    { placeName: "Other place", id: "other" },
];

const PlaceSelector = ({ questState, setQuestState }) => {
    return (
        <StyledPlaceSelector>
            <div className="header">Where is the tile work being done?</div>
            <CheckBoxSelector
                values={places}
                section={section}
                questState={questState}
                setQuestState={setQuestState}
            />
        </StyledPlaceSelector>
    );
};
const StyledPlaceSelector = styled(motion.div)`
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
