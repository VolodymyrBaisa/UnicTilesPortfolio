import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Button from "../components/Button";

const GetQuoteBox = ({ btnText, btnLink, qHeder, qText }) => {
    return (
        <StyledGetQuoteBox>
            <Button text={"Get free quote"} link={"#"} />
            <h2>RESIDENTIAL AND COMMERCIAL TILE INSTALLATION CONTRACTOR</h2>
            <p>
                Our top-notch design team and highly skilled flooring tile
                installation
            </p>
            <p>
                professionals create stunning tiling masterpieces, backsplash
                ideas,
            </p>
            <p>and backsplash designs that we promise you will enjoy.</p>
        </StyledGetQuoteBox>
    );
};

const StyledGetQuoteBox = styled(motion.div)`
    background: rgba(0, 0, 0, 0.6);
    padding: 4rem 2rem 2rem 2rem;

    h2 {
        font-size: 1.6rem;
        text-align: center;
        color: #fff;
        line-height: 1.5em;
        margin: 2em 0 1em 0;
    }

    p {
        font-size: 1.4rem;
        color: #fff;
        margin-top: 0.5em;
    }
`;

export default GetQuoteBox;
