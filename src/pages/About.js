import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Components
import SectionHeader from "../components/SectionHeader";
//Img
import constructionWorker from "../img/about/construction_worker.png";
import figureBottomRight from "../img/svg/figure-bottom-right.svg";
import figureCardTopLeft from "../img/svg/figure-card-top-left.svg";
import figureTopLeft from "../img/svg/figure-top-left.svg";
import figureTopRight from "../img/svg/figure-top-right.svg";
//Storage
import storage from "../utils/Storage";

const elementsAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const About = () => {
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
        <StyledAbout id="about us">
            {/* Figure for background */}
            <img className="figure-top-left" src={figureTopLeft} alt="" />
            <img className="figure-top-right" src={figureTopRight} alt="" />
            <img
                className="figure-bottom-right"
                src={figureBottomRight}
                alt=""
            />
            <div className="card-wrapper">
                {/* Figure for background */}
                <img
                    className="figure-card-top-left"
                    src={figureCardTopLeft}
                    alt=""
                />
                <motion.img
                    src={constructionWorker}
                    alt="Construction worker"
                    ref={ref}
                    variants={elementsAnimation}
                    animate={controls}
                    initial="hidden"
                />
                <motion.div
                    className="about-text-wrapper"
                    ref={ref}
                    variants={elementsAnimation}
                    animate={controls}
                    initial="hidden"
                >
                    <SectionHeader sText={"Who we are"} sColor={"#46423D"} />
                    <p className="about-text">{storage.aboutText}</p>
                </motion.div>
            </div>
        </StyledAbout>
    );
};

const StyledAbout = styled(motion.div)`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b8b8b8;
    .card-wrapper {
        position: relative;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: row;
        margin: 5rem;
        img {
            width: 35rem;
            z-index: 2;
            object-fit: contain;
            object-position: bottom;
        }
        .about-text-wrapper {
            margin: 4rem;
            .about-text {
                font-size: 1.8rem;
                white-space: pre-line;
                color: #46423d;
            }
        }

        .figure-card-top-left {
            position: absolute;
            top: -0.1rem;
        }
    }

    .figure-top-left {
        position: absolute;
        top: -7rem;
        left: 0;
        width: 39.5rem;
    }
    .figure-top-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 80rem;
    }
    .figure-bottom-right {
        position: absolute;
        bottom: -5.5rem;
        right: 0;
        width: 20rem;
    }

    @media screen and (max-width: 1024px) {
        .card-wrapper {
            .figure-card-top-left {
                top: -0.1rem;
                left: -3.1rem;
                width: 31.6rem;
            }
        }
        .figure-top-left {
            top: -2rem;
            width: 34rem;
        }
        .figure-top-right {
            width: 60rem;
        }
        .figure-bottom-right {
            width: 20rem;
        }
    }

    @media screen and (max-width: 800px) {
        .card-wrapper {
            margin: 5rem 0;
            img {
                display: none;
            }
        }

        .figure-top-left {
            top: -5rem;
            width: 24rem;
        }
        .figure-top-right {
            width: 50rem;
        }
    }

    @media screen and (max-width: 600px) {
        .figure-top-left {
            top: -2rem;
            width: 20rem;
        }
        .figure-top-right {
            width: 30rem;
        }
    }
`;

export default About;
