import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Img
import closeBtn from "../img/svg/x-circle.svg";

const closeBtnAnimation = {
    initial: { rotateZ: 0 },
    hover: { rotateZ: 90 },
};

const LearnMorePopUp = ({
    image,
    headerIcon,
    headerText,
    longText,
    selectedCardId,
    setSelectedCardId,
}) => {
    return (
        <LearMoreStyle layoutId={selectedCardId + 1}>
            <motion.img
                onClick={() => setSelectedCardId(null)}
                className="close-btn"
                src={closeBtn}
                alt="Close button"
                variants={closeBtnAnimation}
                initial="initial"
                whileHover="hover"
            />

            {image && (
                <img
                    className="image"
                    src={Object.values(image)}
                    alt={headerText}
                />
            )}

            <div className="content-wrapper">
                <div className="header-wrapper">
                    {headerIcon && (
                        <img
                            className="icon"
                            src={Object.values(headerIcon)}
                            alt=""
                        />
                    )}
                    {headerText && <motion.div>{headerText}</motion.div>}
                </div>
                {longText && <div className="long-description">{longText}</div>}
            </div>
        </LearMoreStyle>
    );
};

const LearMoreStyle = styled(motion.div)`
    position: -webkit-sticky;
    position: sticky;
    z-index: 1000;
    width: 33%;
    min-height: 45rem;
    top: 1rem;
    margin: auto;
    background-color: #fff;
    border: 0.2rem solid #a6a6a6;
    overflow: hidden;

    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.5rem;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }

    .image {
        margin-top: 4rem;
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }

    .content-wrapper {
        padding: 0 1rem 2rem 2rem;
        overflow: hidden;

        .header-wrapper {
            position: relative;
            display: flex;
            margin-bottom: 1.5rem;
            margin-right: 1rem;
            &:after {
                position: absolute;
                display: block;
                top: 6rem;
                right: 0;
                left: 0;
                content: "";
                height: 0.2rem;
                width: 100%;
                background: #9a9084;
            }
            img {
                width: 2.5rem;
                margin-right: 1rem;
            }

            div {
                font-style: normal;
                font-weight: bold;
                font-size: 2rem;
                line-height: 3em;
                text-align: center;
                letter-spacing: 0.095em;
                text-transform: uppercase;
            }
        }
        .long-description {
            height: 46vh;
            position: relative;
            display: flex;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 2.8rem;
            overflow-y: scroll;
            white-space: pre-line;
            padding-right: 1rem;
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
    }

    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export default LearnMorePopUp;
