import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Img
import leftArrow from "../img/svg/left-arrow.svg";
import rightArrow from "../img/svg/right-arrow.svg";

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

const PortfolioSlider = ({ sliders, totalItemsOnPage }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const slider = () => {
        if (!sliders) return;
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

    const pagination = () => {
        if (!sliders) return;
        const totalPages = Math.ceil(sliders.length / totalItemsOnPage);
        let results = [];
        for (let i = 0; i < totalPages; i++) {
            if (i <= 10) {
                if (i === page - 1)
                    results.push(<div className="dot active"></div>);
                else results.push(<div className="dot"></div>);
            } else if (page > 10) {
                results[10] = <div className="dot active"></div>;
            } else {
                results[page] = <div className="dot"></div>;
            }
        }

        return results;
    };

    const onClickIncreasePage = () => {
        const totalPages = Math.ceil(sliders.length / totalItemsOnPage);
        if (page < totalPages) setPage(page + 1);
    };
    const onClickDecreasePage = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <StyledPortfolioSlider
            ref={ref}
            variants={portfolioSliderAnimation}
            animate={controls}
            initial="hidden"
        >
            <div className="slider">{slider()}</div>
            <div className="pagination-wrapper">
                <motion.img
                    className="arrow-left"
                    src={leftArrow}
                    alt="arrow left"
                    variants={buttonPaginationAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={onClickDecreasePage}
                />
                <div className="pagination">
                    <div className="background">{pagination()}</div>
                </div>
                <motion.img
                    className="arrow-right"
                    src={rightArrow}
                    alt="arrow right"
                    variants={buttonPaginationAnimation}
                    initial="start"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={onClickIncreasePage}
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
