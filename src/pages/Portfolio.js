import React, { useState, useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import InstagramSlider from "../components/InstagramSlider";
//Containers
import mask from "../img/svg/mask-down.svg";
//Utils
import { useMediaQuery } from "../utils/MediaQuery";

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
            <InstagramSlider totalItemsOnPage={itemsOnPage} />
            <img className="background-mask" src={mask} alt="" />
        </StyledPortfolio>
    );
};
const StyledPortfolio = styled(motion.div)`
    height: 75rem;
    position: relative;
    z-index: 1;
    padding: 10rem 2rem 2rem 2rem;

    .background-mask {
        position: absolute;
        width: 100%;
        height: 80rem;
        top: -5rem;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export default Portfolio;
