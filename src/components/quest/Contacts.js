import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { windowAnimation } from "./Animation";
//Components
import Input from "../Input";

const section = "contacts";

const SetContacts = ({ questState, setQuestState }) => {
    const saveValues = (name, value) => {
        if (value || value === "") {
            setQuestState({
                ...questState,
                [section]: {
                    ...questState[section],
                    [name]: value,
                },
            });
        }
    };

    return (
        <StyledSelector
            variants={windowAnimation}
            initial="initial"
            animate="anim"
        >
            <div className="header">Please enter your contact information.</div>
            <div className="text">
                After submitting all entered information will be sended to your
                specialist.
            </div>
            <form
                onChange={(e) => {
                    saveValues(e.target.name, e.target.value);
                }}
            >
                <Input
                    name="full_name"
                    label={"Full Name"}
                    value={(questState && questState[section]?.full_name) || ""}
                />
                <Input
                    name="user_email"
                    label={"Email"}
                    value={
                        (questState && questState[section]?.user_email) || ""
                    }
                />
                <Input
                    name="phone"
                    label={"Phone"}
                    value={(questState && questState[section]?.phone) || ""}
                />
            </form>
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
        margin-bottom: 2rem;
    }

    .text {
        font-size: 2rem;
        color: #676d73;
        text-align: center;
        letter-spacing: 0.04em;
        margin-bottom: 3rem;
    }
`;
export default SetContacts;
