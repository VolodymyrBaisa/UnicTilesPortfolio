import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
    start: {
        background: "linear-gradient(180deg, #FDF6F9 0%, #EBB02D 0%), #EBB02D",
    },
    hover: {
        background:
            "linear-gradient(180deg, #FDF6F9 93%, #EBB02D 93%), #EBB02D",
    },
    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1,
        },
    },
    transition: {
        duration: 0.5,
    },
};

const QuoteDialogButtons = ({ isBackOn, isNextOn, isFinishOn, callback }) => {
    const [back, setIsBackOn] = useState(false);
    const [next, setIsNextOn] = useState(false);
    const [finish, setIsFinishOn] = useState(false);

    useEffect(() => {
        setIsBackOn(isBackOn);
        setIsNextOn(isNextOn);
        setIsFinishOn(isFinishOn);
    }, [isBackOn, isNextOn, isFinishOn]);
    return (
        <DialogButtonsStyle>
            {back && (
                <motion.div
                    variants={animation}
                    className="back"
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    onClick={() => callback("back")}
                >
                    Back
                </motion.div>
            )}
            {next && (
                <motion.div
                    variants={animation}
                    className="next"
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    onClick={() => callback("next")}
                >
                    Next
                </motion.div>
            )}
            {finish && (
                <motion.div
                    variants={animation}
                    className="finish"
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    onClick={() => callback("finish")}
                >
                    Finish
                </motion.div>
            )}
        </DialogButtonsStyle>
    );
};
const DialogButtonsStyle = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .back,
    .next,
    .finish {
        flex-grow: 1;
        margin: 0 1rem;
        font-size: 1.8rem;
        font-weight: bold;
        color: #46423d;
        text-align: center;
        background-color: #ebb02d;
        border-radius: 0.5rem;
        padding: 1rem 5rem;
        cursor: pointer;
        border: 0.1rem solid #ebb02d;
        border-radius: 0.5rem;
    }
`;

export default QuoteDialogButtons;
