import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Icons
import arrowRight from "../img/svg/keyboard_arrow_right.svg";

const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const learnMoreBtnAnimation = {
    start: { x: 0 },
    hover: { x: 10 },
    tap: { scale: 0.9 },
};

const Card = ({
    image,
    headerIcon,
    headerText,
    shortText,
    index,
    setSelectedCardId,
}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <StyledCard
            ref={ref}
            variants={cardAnimation}
            animate={controls}
            initial="hidden"
            layoutId={index + 1}
        >
            {image && (
                <motion.img
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
                    {headerText && <div>{headerText}</div>}
                </div>
                {shortText && (
                    <div className="short-description">{shortText}</div>
                )}
                <motion.div
                    className="learn-more-wrapper"
                    variants={learnMoreBtnAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setSelectedCardId(index)}
                >
                    <div>Learn More</div>
                    <img src={arrowRight} alt="" />
                </motion.div>
            </div>
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)`
    .image {
        max-width: 100%;
    }
    .content-wrapper {
        padding: 0 2rem;
        .header-wrapper {
            position: relative;
            display: flex;
            margin-bottom: 1.5rem;
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
        .short-description {
            display: flex;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 2.8rem;
            white-space: pre-line;
        }
        .learn-more-wrapper {
            position: relative;
            display: inline-block;
            align-items: center;
            margin: 2rem 0 3rem 0;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                display: block;
                background: #ebb02d;
                height: 0.2rem;
                width: 16.8rem;
            }
            div {
                display: inline-block;
                font-size: 2rem;
                font-weight: 600;
                line-height: 31px;
                letter-spacing: 0.095em;
                color: #ebb02d;
                text-transform: uppercase;
                pointer-events: none;
            }
            img {
                display: inline-block;
                margin-left: 1rem;
                width: 2rem;
                pointer-events: none;
            }
        }
    }
`;

export default Card;
