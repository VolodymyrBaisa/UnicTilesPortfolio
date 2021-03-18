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
        <StyledPortfolio setItemsOnPage={setItemsOnPage}>
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
    padding: 10rem 2rem 2rem 2rem;

    .background-mask {
        position: absolute;
        width: 100%;
        height: 88rem;
        top: -5rem;
        left: 0;
        right: 0;
        z-index: -1;
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
