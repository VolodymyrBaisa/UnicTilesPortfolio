import React from "react";
import { useLocation, Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//Img
import closeBtn from "../img/svg/x-circle.svg";
//Storage
import storage from "../utils/Storage";

const closeBtnAnimation = {
    initial: { rotateZ: 0 },
    hover: { rotateZ: 90 },
};

const backgroundAnimation = {
    initial: {
        opacity: 0,
        transition: {
            delay: 0.4,
        },
    },
    anim: {
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
};

const windowAnimation = {
    initial: {
        opacity: 0,
        transition: {
            delay: 0.2,
        },
    },
    anim: {
        opacity: 1,
        transition: {
            delay: 0.4,
        },
    },
};

const GetQuoteDialog = () => {
    const location = useLocation();
    const path = location.pathname;
    const linkTo = storage.quoteButton.linkTo;
    const linkBack = storage.quoteButton.linkBack;
    return (
        <AnimatePresence>
            {path && path.includes(linkTo) && (
                <StyledGetQuoteDialog
                    variants={backgroundAnimation}
                    initial="initial"
                    animate="anim"
                    exit="initial"
                >
                    <motion.div
                        className="window"
                        variants={windowAnimation}
                        initial="initial"
                        animate="anim"
                        exit="initial"
                    >
                        <Link to={linkBack}>
                            <motion.img
                                className="close-btn"
                                src={closeBtn}
                                alt="Close button"
                                variants={closeBtnAnimation}
                                initial="initial"
                                whileHover="hover"
                            />
                        </Link>
                        <div className="content"></div>
                    </motion.div>
                </StyledGetQuoteDialog>
            )}
        </AnimatePresence>
    );
};

const StyledGetQuoteDialog = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;

    .window {
        position: relative;
        width: 50vw;
        height: 80vh;
        background: #fff;
        border: 0.2rem solid #a6a6a6;
        border-radius: 0.5rem;
        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0.5rem;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
        }

        .content {
            position: absolute;
            top: 4rem;
            right: 0;
            left: 0;
            bottom: 0;
            margin: 0 1rem 1rem 1rem;
        }

        @media screen and (max-width: 1024px) {
            width: 60vw;
            height: 80vh;
        }

        @media screen and (max-width: 800px) {
            width: 80vw;
            height: 80vh;
        }

        @media screen and (max-width: 600px) {
            width: 90vw;
            height: 80vh;
        }
    }
`;

export default GetQuoteDialog;
