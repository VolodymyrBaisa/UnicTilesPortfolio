import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import PortfolioSlider from "../components/PortfolioSlider";
//Containers
import mask from "../img/svg/mask-down.svg";
//Utils
import { useMediaQuery } from "../utils/MediaQuery";
//Img
import slider1 from "../img/slider/1.jpg";
import slider2 from "../img/slider/2.jpg";
import slider3 from "../img/slider/3.jpg";
import slider4 from "../img/slider/4.jpg";
import slider5 from "../img/slider/5.jpg";
import slider6 from "../img/slider/6.jpg";
import slider7 from "../img/slider/7.jpg";
import slider8 from "../img/slider/8.jpg";
import slider9 from "../img/slider/9.jpg";
import slider10 from "../img/slider/10.jpg";
import slider11 from "../img/slider/11.jpg";
import slider12 from "../img/slider/12.jpg";
import slider13 from "../img/slider/13.jpg";
import slider14 from "../img/slider/14.jpg";
import slider15 from "../img/slider/15.jpg";
import slider16 from "../img/slider/16.jpg";
import slider17 from "../img/slider/17.jpg";
import slider18 from "../img/slider/18.jpg";
import slider19 from "../img/slider/19.jpg";
import slider20 from "../img/slider/20.jpg";

//Slider Data
const sliders = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider13,
    slider14,
    slider15,
    slider16,
    slider17,
    slider18,
    slider19,
    slider20,
];

const Portfolio = () => {
    const [itemsOnPage, setItemsOnPage] = useState(10);

    const isPageWidthMin1024 = useMediaQuery("(max-width: 1024px)");
    const isPageWidthMin800 = useMediaQuery("(max-width: 801px)");
    const isPageWidthMin600 = useMediaQuery("(max-width: 601px)");

    useEffect(() => {
        if (isPageWidthMin1024 && !isPageWidthMin800 && !isPageWidthMin600)
            setItemsOnPage(8);
        else if (isPageWidthMin800 && !isPageWidthMin600) setItemsOnPage(6);
        else if (isPageWidthMin600) setItemsOnPage(1);
        else setItemsOnPage(10);
    }, [isPageWidthMin1024, isPageWidthMin800, isPageWidthMin600, itemsOnPage]);

    return (
        <StyledPortfolio setItemsOnPage={setItemsOnPage} id="portfolio">
            <SectionHeader sText={"Portfolio"} sColor={"#FFFFFF"} />
            <PortfolioSlider sliders={sliders} totalItemsOnPage={itemsOnPage} />
            <img className="background-mask" src={mask} alt="" />
        </StyledPortfolio>
    );
};
const StyledPortfolio = styled(motion.div)`
    height: 82rem;
    position: relative;
    z-index: 1;
    padding: 10rem 5rem 2rem 5rem;

    .background-mask {
        position: absolute;
        width: 100%;
        height: 88rem;
        top: -5rem;
        left: 0;
        right: 0;
        z-index: -1;
        pointer-events: none;
    }

    @media screen and (max-width: 1024px) {
        padding: 10rem 2rem 2rem 2rem;
        height: 79rem;
        .background-mask {
            height: 85rem;
        }
    }

    @media screen and (max-width: 600px) {
        height: 67rem;
        padding: 8rem 2rem 2rem 2rem;
        .background-mask {
            height: 73rem;
        }
    }
`;

export default Portfolio;
