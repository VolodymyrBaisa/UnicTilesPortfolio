import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Textarea = ({ name, label, required }) => {
    return (
        <StyledTextarea>
            <div>
                {label} <span>*</span>
            </div>
            <textarea name={name} required={required} />
        </StyledTextarea>
    );
};

const StyledTextarea = styled(motion.div)`
    margin-bottom: 2rem;
    div {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }
    textarea {
        outline: none;
        width: 100%;
        height: 25rem;
        border: 0.2rem solid #46423d;
        border-radius: 0.5rem;
        padding: 0 0.5rem;
        resize: none;
        padding: 0.5rem;
    }
`;

export default Textarea;
