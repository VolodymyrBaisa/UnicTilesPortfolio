import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import LogoIcon from "../img/svg/logo_icon.svg";

const Logo = () => {
    return (
        <StyledLogo>
            <div className="container">
                <img className="icon" src={LogoIcon} alt="UnicTiles Logo" />
                <div>
                    <div className="title">Unic Tiles</div>
                    <div className="slogan">We build your dreams</div>
                </div>
            </div>
        </StyledLogo>
    );
};

const StyledLogo = styled(motion.div)`
    position: relative;
    z-index: 1000;
    filter: drop-shadow(0.5rem 0.6rem 0.3rem rgba(0, 0, 0, 0.25));
    .container {
        width: 38.5em;
        clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
        background: #ebb02d;
        position: absolute;
        padding: 2.2em 0;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .icon {
            width: 8rem;
            margin: 0 1vw 0 2vw;
        }
        .title {
            text-transform: uppercase;
            font-size: 3.6rem;
            font-weight: 600;
            color: #46423d;
            text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        }

        .slogan {
            font-size: 2.15rem;
            font-weight: 500;
            color: #46423d;
            text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
            letter-spacing: -0.024em;
        }
    }
`;

export default Logo;
