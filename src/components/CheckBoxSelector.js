import React, { useState, useEffect, useRef } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const CheckBoxSelector = ({ values, section, questState, setQuestState }) => {
    const [arrValues, setArrValues] = useState([]);
    useEffect(() => setArrValues(values), [values]);

    const cOtherBoxRef = useRef(null);
    const iOtherBoxRef = useRef(null);

    const [isOtherChecked, setIsOtherChecked] = useState(false);

    //Fix check/uncheck color for other input
    useEffect(() => {
        if (iOtherBoxRef.current && !isOtherChecked)
            iOtherBoxRef.current.style.color = "#6e6e6e";
        else if (iOtherBoxRef.current)
            iOtherBoxRef.current.style.color = "#000";
    }, [isOtherChecked]);

    const saveValues = (name, isChecked = false) => {
        if (name) {
            setQuestState({
                ...questState,
                [section]: {
                    ...questState[section],
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

    const saveOtherCheckBoxValue = (name, isChecked = false, comment = "") => {
        if (name) {
            setQuestState({
                ...questState,
                [section]: {
                    ...questState[section],
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
        <StyledCheckBoxSelector>
            <ul>
                {arrValues &&
                    arrValues.map((value, index) => {
                        return value.id !== "other" ? (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    name={value.name}
                                    value={value.name}
                                    checked={
                                        (questState[section] &&
                                            questState[section][value.name]) ||
                                        false
                                    }
                                    onChange={(e) =>
                                        saveValues(
                                            e.target?.value,
                                            e.target?.checked
                                        )
                                    }
                                />
                                <label htmlFor={index}>{value.name}</label>
                            </li>
                        ) : (
                            <li key={index}>
                                <input
                                    ref={cOtherBoxRef}
                                    type="checkbox"
                                    name="other"
                                    value="other"
                                    checked={
                                        questState[section] &&
                                        questState[section]["Other"]
                                            ? true
                                            : isOtherChecked
                                    }
                                    onChange={(e) => {
                                        setIsOtherChecked(e.target?.checked);
                                        saveOtherCheckBoxValue(
                                            "Other",
                                            cOtherBoxRef.current?.checked,
                                            iOtherBoxRef.current?.value || ""
                                        );
                                    }}
                                />
                                <label htmlFor="other">&nbsp;</label>
                                <input
                                    ref={iOtherBoxRef}
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
                                        saveOtherCheckBoxValue(
                                            "Other",
                                            cOtherBoxRef.current?.checked,
                                            iOtherBoxRef.current?.value
                                        );
                                    }}
                                />
                            </li>
                        );
                    })}
            </ul>
        </StyledCheckBoxSelector>
    );
};

const StyledCheckBoxSelector = styled(motion.div)`
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

            input[type="checkbox"] + label {
                color: #6e6e6e;
            }
            input[type="checkbox"]:checked + label {
                color: #000;
            }

            [type="checkbox"]:not(checked),
            [type="checkbox"]:checked {
                opacity: 0;
                cursor: pointer;
                transform: translateX(0.3rem);
            }

            [type="checkbox"]:not(checked) + label::before,
            [type="checkbox"]:checked + label::before {
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

            [type="checkbox"]:checked + label::before {
                content: "✕";
            }

            [type="checkbox"]:not(checked) + label::before {
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

export default CheckBoxSelector;
