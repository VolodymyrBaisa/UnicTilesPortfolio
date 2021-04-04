import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//Components
import QuoteDialogButtons from "../components/QuoteDialogButtons";
import Progress from "../components/Progress";
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

const quest = (questState, setQuestState) => {
    return [
        { window: <Start />, id: "start" },
        {
            window: (
                <PlaceSelector
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "placeselector",
        },
        {
            window: (
                <Areas questState={questState} setQuestState={setQuestState} />
            ),
            id: "areas",
        },
        {
            window: (
                <Squares
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "squares",
        },
        {
            window: (
                <Material
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "material",
        },
        {
            window: (
                <TypeOfTile
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "typeoftile",
        },
        {
            window: (
                <IfYouHave
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "ifyouHave",
        },
        {
            window: (
                <Description
                    memory={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "description",
        },
        {
            window: (
                <SetContacts
                    questState={questState}
                    setQuestState={setQuestState}
                />
            ),
            id: "setcontacts",
        },
        { window: <Finish questState={questState} />, id: "finish" },
    ];
};

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
    //Save selected or set information from quest
    const [questState, setQuestState] = useState({});

    useEffect(() => {
        console.log(questState);
    }, [questState]);

    useEffect(() => {
        setIsBackOn(false);
        setIsNextOn(false);
        setIsSkipOn(false);
        setIsFinishOn(false);

        if (["start"].indexOf(quest()[questIterator]?.id) > -1) {
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
            ].indexOf(quest()[questIterator]?.id) > -1
        ) {
            setIsBackOn(true);
            setIsNextOn(true);
        }
        if (
            ["description", "setcontacts"].indexOf(quest()[questIterator]?.id) >
            -1
        ) {
            setIsBackOn(true);
            setIsSkipOn(true);
        }
        if (["finish"].indexOf(quest()[questIterator]?.id) > -1) {
            setIsBackOn(true);
            setIsFinishOn(true);
        }
    }, [questIterator]);

    const onClickQuestButton = (selectedBtn) => {
        switch (selectedBtn) {
            case "next":
            case "skip":
                if (questIterator < quest().length)
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
                                {quest &&
                                    quest().length > 0 &&
                                    quest(questState, setQuestState)[
                                        questIterator
                                    ]?.window}
                            </div>
                            <div className="controllers">
                                <div className="progress-bar">
                                    <Progress
                                        value={questIterator}
                                        max={quest().length - 1}
                                    />
                                </div>
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
                    position: absolute;
                    top: -0.4rem;
                    left: 2rem;
                    right: 2rem;
                    height: 0.6rem;
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
        }
    }
`;

export default GetQuoteDialog;
