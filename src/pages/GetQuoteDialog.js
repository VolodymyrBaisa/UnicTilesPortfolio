import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//Components
import QuoteDialogButtons from "../components/QuoteDialogButtons";
//Img
import closeBtn from "../img/svg/x-circle.svg";
//Storage
import storage from "../utils/Storage";
//Quest
import Start from "../components/quest/Start";
import PlaceSelector from "../components/quest/PlaceSelector";
import Areas from "../components/quest/Areas";
import Squares from "../components/quest/Squares";
import Material from "../components/quest/Material";
import TypeOfTile from "../components/quest/TypeOfTile";
import IfYouHave from "../components/quest/IfYouHave";
import Description from "../components/quest/Description";
import SetContacts from "../components/quest/SetContacts";
import Finish from "../components/quest/Finish";

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

const quest = [
    { window: <Start />, id: "start" },
    { window: <PlaceSelector />, id: "placeselector" },
    { window: <Areas />, id: "areas" },
    { window: <Squares />, id: "squares" },
    { window: <Material />, id: "material" },
    { window: <TypeOfTile />, id: "typeoftile" },
    { window: <IfYouHave />, id: "ifyouHave" },
    { window: <Description />, id: "description" },
    { window: <SetContacts />, id: "setcontacts" },
    { window: <Finish />, id: "finish" },
];

const GetQuoteDialog = () => {
    const location = useLocation();
    const path = location.pathname;
    const linkTo = storage.quoteButton.linkTo;
    const linkBack = storage.quoteButton.linkBack;

    const [isBackOn, setIsBackOn] = useState(false);
    const [isNextOn, setIsNextOn] = useState(false);
    const [isSkipOn, setIsSkipOn] = useState(false);
    const [isFinishOn, setIsFinishOn] = useState(false);
    const [questIterator, setQuestIterator] = useState(0);

    useEffect(() => {
        setIsBackOn(false);
        setIsNextOn(false);
        setIsSkipOn(false);
        setIsFinishOn(false);

        if (["start"].indexOf(quest[questIterator].id) > -1) {
            setIsNextOn(true);
        }
        if (
            [
                "placeselector",
                "areas",
                "squares",
                "material",
                "typeoftile",
                "ifyouHave",
            ].indexOf(quest[questIterator].id) > -1
        ) {
            setIsBackOn(true);
            setIsNextOn(true);
        }
        if (
            ["description", "setcontacts"].indexOf(quest[questIterator].id) > -1
        ) {
            setIsBackOn(true);
            setIsSkipOn(true);
        }
        if (["finish"].indexOf(quest[questIterator].id) > -1) {
            setIsBackOn(true);
            setIsFinishOn(true);
        }
    }, [questIterator]);

    const onClickQuestButton = (selectedBtn) => {
        switch (selectedBtn) {
            case "next":
            case "skip":
                if (questIterator < quest.length)
                    setQuestIterator(questIterator + 1);
                break;
            case "back":
                if (questIterator > 0) setQuestIterator(questIterator - 1);
                break;
            case "finish":
                break;
            default:
                setQuestIterator(0);
        }
    };

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
                                onClick={() => setQuestIterator(0)}
                            />
                        </Link>
                        <div className="wrapper">
                            <div className="content">
                                {quest[questIterator].window}
                            </div>
                            <div className="controllers">
                                <progress
                                    className="progress-bar"
                                    value={questIterator}
                                    max={quest.length - 1}
                                ></progress>
                                <QuoteDialogButtons
                                    isBackOn={isBackOn}
                                    isNextOn={isNextOn}
                                    isSkipOn={isSkipOn}
                                    isFinishOn={isFinishOn}
                                    callback={(btn) => {
                                        onClickQuestButton(btn);
                                    }}
                                />
                            </div>
                        </div>
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
        .wrapper {
            position: absolute;
            top: 4rem;
            right: 0;
            left: 0;
            bottom: 0;
            margin: 0 1rem 0 1rem;
            display: flex;
            flex-direction: column;
            .content {
                width: 100%;
                height: 100%;
                overflow-y: scroll;
                padding: 1rem;

                /* width */
                &::-webkit-scrollbar {
                    width: 0.3rem;
                }

                /* Track */
                &::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px rgb(154, 144, 132, 0.5);
                    border-radius: 10px;
                }

                /* Handle */
                &::-webkit-scrollbar-thumb {
                    background: #ebb02d;
                    border-radius: 10px;
                }

                /* Handle on hover */
                &::-webkit-scrollbar-thumb:hover {
                    background: #b30000;
                }
            }
            .controllers {
                position: relative;
                width: 100%;
                height: 7rem;
                padding: 1rem 8rem;

                .progress-bar {
                    -webkit-appearance: none;
                    appearance: none;
                    position: absolute;
                    top: -0.6rem;
                    left: 2rem;
                    width: 94%;
                    height: 0.6rem;
                    &::-webkit-progress-bar {
                        background-color: #eee;
                        border-radius: 2px;
                    }

                    &::-webkit-progress-value {
                        background: -webkit-linear-gradient(
                                top,
                                rgba(255, 255, 255, 0.25),
                                rgba(0, 0, 0, 0.25)
                            ),
                            #ebb02d;

                        border-radius: 2px;
                        background-size: 35px 20px, 100% 100%, 100% 100%;
                    }
                }
            }
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
            .wrapper {
                .controllers {
                    .progress-bar {
                        width: 90%;
                    }
                }
            }
        }
    }
`;

export default GetQuoteDialog;
