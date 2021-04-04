import React, { useState, useEffect, useRef } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const RadioButtonSelector = ({
    values,
    section,
    questState,
    setQuestState,
}) => {
    const [arrValues, setArrValues] = useState([]);
    useEffect(() => setArrValues(values), [values]);

    const cOtherRadioRef = useRef(null);
    const iOtherRadioRef = useRef(null);

    const [isOtherChecked, setIsOtherChecked] = useState(false);

    //Fix check/uncheck color for other input
    useEffect(() => {
        if (iOtherRadioRef.current && !isOtherChecked)
            iOtherRadioRef.current.style.color = "#6e6e6e";
        else if (iOtherRadioRef.current)
            iOtherRadioRef.current.style.color = "#000";
    }, [isOtherChecked]);

    const saveValues = (name, isChecked = false) => {
        if (name) {
            setQuestState({
                ...questState,
                [section]: {
                    ...Object.assign(
                        {},
                        {
                            [name]: isChecked,
                        }
                    ),
                },
            });
        }
    };

    const saveOtherRadioValue = (name, isChecked = false, comment = "") => {
        if (name) {
            setQuestState({
                ...questState,
                [section]: {
                    ...Object.assign(
                        {},
                        {
                            [name]: isChecked,
                            comment,
                        }
                    ),
                },
            });
        }
    };

    return (
        <StyledRadioButtonSelector>
            <ul>
                {arrValues &&
                    arrValues.map((value, index) => {
                        return value.id !== "other" ? (
                            <li key={index}>
                                <input
                                    type="radio"
                                    name="radio"
                                    value={value.name}
                                    checked={
                                        (questState[section] &&
                                            questState[section][value.name]) ||
                                        false
                                    }
                                    onClick={(e) => {
                                        setIsOtherChecked(false);
                                    }}
                                    onChange={(e) => {
                                        saveValues(
                                            e.target?.value,
                                            e.target?.checked
                                        );
                                    }}
                                />
                                <label htmlFor={index}>{value.name}</label>
                            </li>
                        ) : (
                            <li key={index}>
                                <input
                                    ref={cOtherRadioRef}
                                    type="radio"
                                    name="radio"
                                    value="other"
                                    checked={
                                        questState[section] &&
                                        questState[section]["Other"]
                                            ? true
                                            : isOtherChecked
                                    }
                                    onChange={(e) => {
                                        setIsOtherChecked(e.target?.checked);
                                        saveOtherRadioValue(
                                            "Other",
                                            cOtherRadioRef.current?.checked,
                                            iOtherRadioRef.current?.value || ""
                                        );
                                    }}
                                />
                                <label htmlFor="other">&nbsp;</label>
                                <input
                                    ref={iOtherRadioRef}
                                    className="other-option"
                                    type="text"
                                    placeholder={value.name}
                                    value={
                                        (questState[section] &&
                                            questState[section]["comment"]) ||
                                        ""
                                    }
                                    onClick={() => {
                                        setIsOtherChecked(true);
                                    }}
                                    onChange={() => {
                                        saveOtherRadioValue(
                                            "Other",
                                            cOtherRadioRef.current?.checked,
                                            iOtherRadioRef.current?.value
                                        );
                                    }}
                                />
                            </li>
                        );
                    })}
            </ul>
        </StyledRadioButtonSelector>
    );
};

const StyledRadioButtonSelector = styled(motion.div)`
    width: 100%;
    height: 100%;
    ul {
        li {
            list-style: none;
            display: flex;
            align-items: center;
            font-size: 2.2rem;
            letter-spacing: 0.05rem;
            border-bottom: 1px solid #e9eced;
            padding: 1rem 0.5rem;
            label {
                position: relative;
                margin-left: 1rem;
            }

            input[type="radio"] + label {
                color: #6e6e6e;
            }
            input[type="radio"]:checked + label {
                color: #000;
            }

            [type="radio"]:not(checked),
            [type="radio"]:checked {
                opacity: 0;
                cursor: pointer;
                transform: translateX(0.3rem);
            }

            [type="radio"]:not(checked) + label::before,
            [type="radio"]:checked + label::before {
                position: absolute;
                top: 0.6rem;
                left: -2.3rem;
                color: #ebb02d;
                pointer-events: none;
                border: 1px solid #6e6e6e;
                font-size: 1.5rem;
                font-weight: bold;
                border-radius: 0.3rem;
                width: 1.4rem;
                height: 1.5rem;
                padding-left: 0.05rem;
                line-height: 1;
            }

            [type="radio"]:checked + label::before {
                content: "✕";
            }

            [type="radio"]:not(checked) + label::before {
                content: "";
            }

            .other-option {
                all: unset;
                padding: 0.2rem 0.5rem;
                width: 60%;
                font-size: 2rem;
                transform: translateX(-0.35rem);
                border: 0.1rem solid #6e6e6e;
                border-radius: 0.5rem;
                cursor: text;

                &:focus {
                    outline: none;
                    border: 0.1rem solid #ebb02d;
                    border-radius: 0.5rem;
                }
            }
        }
        li:last-child {
            margin-bottom: 5rem;
        }
    }
`;

export default RadioButtonSelector;
