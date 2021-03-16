import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//API
import api from "../utils/API";
//Img
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

const instagramSliderAnimation = {
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
    },
    hover: {
        y: -5,
        transition: {
            duration: 0.2,
        },
    },
};

const InstagramSlider = ({ totalItemsOnPage }) => {
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

    const pagination = (page) => {
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
                    className="imgCard"
                    src={sliders[i]}
                    alt=""
                    key={i}
                />
            );
        }
        return result;
    };

    return (
        <StyledInstagramSlider
            ref={ref}
            variants={instagramSliderAnimation}
            animate={controls}
            initial="hidden"
        >
            {pagination(1)}
        </StyledInstagramSlider>
    );
};
const StyledInstagramSlider = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .imgCard {
        width: 26.5rem;
        border: 5px solid #27272b;
        box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        .imgCard {
            width: 25rem;
        }
    }

    @media screen and (max-width: 800px) {
        .imgCard {
            width: 24rem;
        }
    }

    @media screen and (max-width: 600px) {
        .imgCard {
            width: 43rem;
        }
    }
`;

export default InstagramSlider;
