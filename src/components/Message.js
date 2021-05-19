import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Img
import closeBtn from "../img/svg/x-circle.svg";

const contactFormAnimation = {
    hidden: {
        y: -400,
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "tween",
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "tween",
        },
    },
};

const closeBtnAnimation = {
    initial: { rotateZ: 0 },
    hover: { rotateZ: 90 },
};
/* 0 message
   1 error */
const Message = ({ title, message, closeCallback }) => {
    return (
        <StyledMessage
            variants={contactFormAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <div className="window">
                <div className="header">
                    <motion.img
                        className="close-btn"
                        src={closeBtn}
                        alt="Close button"
                        variants={closeBtnAnimation}
                        initial="initial"
                        whileHover="hover"
                        onClick={() =>
                            typeof closeCallback === "function"
                                ? closeCallback(true)
                                : null
                        }
                    />
                </div>
                <div className="title">{title}</div>
                <div className="line"></div>
                <div className="message">{message}</div>
            </div>
        </StyledMessage>
    );
};

const StyledMessage = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 5000;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

    .window {
        position: relative;
        width: 40%;
        min-height: 10%;
        background: #fff;
        border: 1px solid #000000;
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        pointer-events: all;

        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0.5rem;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
        }
        .title {
            margin: 1rem auto 1rem auto;
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
            color: #46423d;
        }

        .line {
            margin: auto;
            width: 100%;
            background: #ebb02d;
            height: 0.1rem;
        }

        .message {
            margin: 1rem;
            font-size: 1.8rem;
            color: #46423d;
        }
    }

    @media screen and (max-width: 1024px) {
        .window {
            width: 60%;
        }
    }

    @media screen and (max-width: 800px) {
        .window {
            width: 80%;
        }
    }

    @media screen and (max-width: 600px) {
        .window {
            width: 90%;
        }
    }
`;

export default Message;
