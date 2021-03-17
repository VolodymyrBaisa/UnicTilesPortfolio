import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Img
import leftArrow from "../img/svg/left-arrow.svg";
import rightArrow from "../img/svg/right-arrow.svg";
import slider1 from "../img/placeholder/1.jpg";
import slider2 from "../img/placeholder/2.jpg";
import slider3 from "../img/placeholder/3.jpg";
import slider4 from "../img/placeholder/4.jpg";

//Slider Data
const sliders = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider1,
    slider2,
    slider3,
    slider4,
    slider1,
    slider2,
    slider3,
    slider4,
];

const portfolioSliderAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const cardAnimation = {
    start: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -5,
        transition: {
            duration: 0.2,
        },
    },
    tap: { scale: 0.9 },
};

const buttonPaginationAnimation = {
    start: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
};

const PortfolioSlider = ({ totalItemsOnPage }) => {
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

    const slider = (page) => {
        let result = [];
        const totalPages = Math.ceil(sliders.length / totalItemsOnPage);
        for (
            let i = (page - 1) * totalItemsOnPage;
            i < totalItemsOnPage * page &&
            i < sliders.length &&
            page <= totalPages &&
            page > 0;
            i++
        ) {
            result.push(
                <motion.img
                    variants={cardAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    className="imgCard"
                    src={sliders[i]}
                    alt=""
                    key={i}
                />
            );
        }
        return result;
    };

    const pagination = () => {};

    return (
        <StyledPortfolioSlider
            ref={ref}
            variants={portfolioSliderAnimation}
            animate={controls}
            initial="hidden"
        >
            <div className="slider">{slider(1)}</div>
            <div className="pagination-wrapper">
                <motion.img
                    className="arrow-left"
                    src={leftArrow}
                    alt="arrow left"
                    variants={buttonPaginationAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                />
                <div className="pagination">
                    <div className="background">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <motion.img
                    className="arrow-right"
                    src={rightArrow}
                    alt="arrow right"
                    variants={buttonPaginationAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                />
            </div>
        </StyledPortfolioSlider>
    );
};
const StyledPortfolioSlider = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .slider {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        .imgCard {
            object-fit: cover;
            width: 26.5rem;
            border: 5px solid #27272b;
            box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            cursor: pointer;
        }
    }
    .pagination-wrapper {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;

        .arrow-left,
        .arrow-right {
            cursor: pointer;
        }

        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem 2rem;
            background: #88888e;
            border-radius: 5rem;
            border: 0.2rem solid #27272b;
            .background {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                background: #27272b;
                padding: 0.5rem 1rem;
                border-radius: 5rem;
                margin: 0.2rem;
                .dot {
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 50%;
                    background: #727272;
                }
                .active {
                    background: #fff;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .slider {
            .imgCard {
                width: 25rem;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .slider {
            .imgCard {
                width: 24rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .slider {
            .imgCard {
                width: 43rem;
            }
        }
    }
`;

export default PortfolioSlider;
