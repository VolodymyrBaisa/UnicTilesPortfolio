import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import {
    motion,
    useAnimation,
    AnimateSharedLayout,
    AnimatePresence,
} from "framer-motion";
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

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const [page, setPage] = useState(1);
    const [selectedSliderId, setSelectedSliderId] = useState(null);

    let totalPages = 0;

    const slider = () => {
        if (!sliders) return;
        let result = [];
        totalPages = Math.ceil(sliders.length / totalItemsOnPage);
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
                    className="img-card"
                    src={sliders[i]}
                    alt=""
                    key={i}
                    layoutId={i + 1}
                    onClick={() => setSelectedSliderId(i)}
                />
            );
        }
        return result;
    };

    const pagination = () => {
        if (!sliders) return;
        let results = [];
        for (let i = 0; i < totalPages; i++) {
            if (i <= 10) {
                if (i === page - 1)
                    results.push(<div key={i} className="dot active"></div>);
                else results.push(<div key={i} className="dot"></div>);
            } else if (page > 10) {
                results[10] = <div key={i} className="dot active"></div>;
            } else {
                results[page] = <div key={i} className="dot"></div>;
            }
        }

        return results;
    };

    const onClickIncreasePage = () => {
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
            <AnimateSharedLayout type="crossfade">
                <div className="slider">{slider()}</div>
                <AnimatePresence>
                    {(selectedSliderId || selectedSliderId === 0) && (
                        <motion.div className="slider-popup-wrapper">
                            <motion.img
                                className="img-card-popup"
                                src={sliders[selectedSliderId]}
                                alt=""
                                onClick={() => setSelectedSliderId(null)}
                                layoutId={selectedSliderId + 1}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
            {totalPages > 1 && (
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
            )}
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
        .img-card {
            object-fit: cover;
            width: 26.5rem;
            height: 26.5rem;
            border: 0.6rem solid #27272b;
            box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
            border-radius: 0.5rem;
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

    .slider-popup-wrapper {
        position: absolute;
        top: 9rem;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .img-card-popup {
            object-fit: cover;
            object-position: center center;
            width: 60%;
            height: 82%;
            border: 0.6rem solid #27272b;
            border-radius: 0.5rem;
            background: #27272b;
        }
    }

    @media screen and (max-width: 1024px) {
        .slider {
            .img-card {
                width: 25rem;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .slider {
            .img-card {
                width: 24rem;
                height: 24rem;
            }
        }

        .slider-popup-wrapper {
            top: 7.5rem;
            .img-card-popup {
                width: 80%;
                height: 77%;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .slider {
            .img-card {
                width: 43rem;
                height: 42rem;
            }
        }

        .slider-popup-wrapper {
            .img-card-popup {
                width: 100%;
                height: 75%;
            }
        }
    }
`;

export default PortfolioSlider;
