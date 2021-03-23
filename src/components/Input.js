import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Input = ({ label, icon }) => {
    return (
        <StyledInput>
            <div className="label">
                {label} <span>*</span>
            </div>
            <div className="input-wrapper">
                <input type="text" />
                <img src={icon} alt="" />
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
        }
        img {
            width: 2.5rem;
            margin-left: 0.2rem;
        }
    }
`;

export default Input;
