import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import instagram from "../img/svg/instagram.svg";
import facebook from "../img/svg/facebook.svg";

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <div>
                <img src={instagram} alt="" />
            </div>
            <div>
                <img src={facebook} alt="" />
            </div>
        </StyledSocialIcons>
    );
};
const StyledSocialIcons = styled(motion.div)`
    display: flex;
    align-items: center;

    div {
        margin-right: 1.5rem;
        cursor: pointer;
        &:after {
            transition: all 0.2s ease;
            position: absolute;
            content: "";
            display: block;
            width: 0;
            overflow: hidden;
            border-bottom: 0.4rem solid #ebb02d;
            margin-top: 0.2rem;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        &:hover:after {
            width: 2.5rem;
        }
    }
    img {
        width: 2.5rem;
    }
`;
export default SocialIcons;
