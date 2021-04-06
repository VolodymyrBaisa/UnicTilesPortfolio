import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Textarea = ({ name, label, value, required, callback }) => {
    const [valueState, setValueState] = useState();
    return (
        <StyledTextarea>
            {label && (
                <div>
                    {label} {required && <span>*</span>}
                </div>
            )}
            <textarea
                name={name}
                required={required}
                value={value ? value : valueState}
                onChange={(e) => {
                    callback
                        ? callback(e.target.value)
                        : setValueState(e.target.value);
                }}
            />
        </StyledTextarea>
    );
};

const StyledTextarea = styled(motion.div)`
    margin-bottom: 2rem;
    height: 100%;

    div {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    span {
        color: red;
    }

    textarea {
        position: relative;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        outline: none;
        border: 0.2rem solid #46423d;
        border-radius: 0.5rem;
        padding: 0 0.5rem;
        resize: none;
        padding: 0.5rem;
        font-size: 1.8rem;
        &:focus {
            border: 0.2rem solid #ebb02d;
        }
    }
`;

export default Textarea;
