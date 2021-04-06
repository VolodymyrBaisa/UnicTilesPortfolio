import React, { useState, useRef } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Input = ({ name, label, value = "", icon, required }) => {
    const [valueState, setValueState] = useState("");
    const divWrapperRef = useRef(null);

    const onFocus = () => {
        divWrapperRef.current.style.border = "0.2rem solid #ebb02d";
    };

    const onFocusOut = () => {
        divWrapperRef.current.style.border = "0.2rem solid #46423d";
    };

    return (
        <StyledInput>
            <div className="label">
                {label && label} {required && <span>*</span>}
            </div>
            <div ref={divWrapperRef} className="input-wrapper">
                <input
                    name={name}
                    type="text"
                    value={value ? value : valueState}
                    required={required}
                    onChange={(e) => setValueState(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onFocusOut}
                />
                {icon && <img src={icon} alt="" />}
            </div>
        </StyledInput>
    );
};

const StyledInput = styled(motion.div)`
    margin-bottom: 2rem;
    .label,
    span {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    span {
        color: red;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        border: 0.2rem solid #46423d;
        border-radius: 0.5rem;
        padding: 0 0.5rem;

        input {
            all: unset;
            width: 100%;
            height: 100%;
            font-size: 1.8rem;
            cursor: text;
        }

        img {
            width: 2.5rem;
            margin-left: 0.2rem;
        }
    }
`;

export default Input;
