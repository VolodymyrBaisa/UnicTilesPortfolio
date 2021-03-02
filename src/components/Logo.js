import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import Container from "../img/svg/logo_container.svg";
import LogoIcon from "../img/svg/logo_icon.svg";

const Logo = () => {
    return (
        <StyledLogo>
            <img className="svg-bg" src={Container} alt="" />
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
    width: 25vw;
    height: 8.2vw;
    .svg-bg {
        position: absolute;
        top: 0;
        z-index: 1;
    }
    .container {
        position: absolute;
        top: 0;
        width: 25vw;
        height: 8.2vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        z-index: 2;
        .icon {
            width: 4.8vw;
            margin: 0 1vw 0 2vw;
        }
        .title {
            text-transform: uppercase;
            font-size: 3.6rem;
            font-weight: 600;
            color: #46423d;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .slogan {
            font-size: 2.15rem;
            font-weight: 500;
            color: #46423d;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            letter-spacing: -0.024em;
        }
    }
`;

export default Logo;
