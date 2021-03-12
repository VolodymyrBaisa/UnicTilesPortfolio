import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Mask
import sliderMask from "../img/svg/slider_mask.svg";

let index = 0;
let fInterval = null;

const Slider = ({ sliders, interval }) => {
    const total = sliders.length;
    const [slider, setSlider] = useState(sliders[0]);

    const imageSlider = () => {
        index++;
        if (index % total === 0) index = 0;
        setSlider(sliders[index]);
    };

    useEffect(() => {
        if (fInterval) clearInterval(fInterval);
        fInterval = setInterval(imageSlider, interval);
    }, [slider, interval]);

    const onClickSwitchImage = (sIndex) => {
        index = sIndex;
        setSlider(sliders[index]);
    };

    const dots = () => {
        let result = [];

        for (let i = 0; i < total; i++) {
            if (index === i)
                result.push(<div key={i} className="slider-item active"></div>);
            else
                result.push(
                    <div
                        key={i}
                        onClick={() => onClickSwitchImage(i)}
                        className="slider-item"
                    ></div>
                );
        }
        return result;
    };

    return (
        <StyledSlider>
            <img className="slider-item" src={slider} alt="" />
            <div className="slider-switcher">{dots()}</div>
        </StyledSlider>
    );
};

const StyledSlider = styled(motion.div)`
    position: absolute;
    top: 4rem;
    left: 0;
    height: 68rem;
    width: 100%;

    .slider-item {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        mask-image: url(${sliderMask});
        mask-size: 100vw 67rem;
        mask-repeat: no-repeat;
        mask-position: center;
    }

    .slider-switcher {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        padding: 1.1em 0.8em 1.1em 0.8em;
        border-radius: 1rem 0 0 1rem;
        background: rgba(0, 0, 0, 0.6);

        .slider-item {
            width: 0.8rem;
            height: 0.8rem;
            margin-bottom: 0.8em;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            cursor: pointer;
        }

        .slider-item:last-child {
            margin-bottom: 0;
        }

        .active {
            background: rgba(255, 255, 255, 1);
        }
    }
`;

export default Slider;
