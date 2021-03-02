import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Logo from "../components/Logo";
import Menu from "../components/Menu";
//Icons
import Phone from "../img/svg/phone.svg";
import Mail from "../img/svg/mail.svg";
import Instagram from "../img/svg/instagram.svg";
//Containers
import Mask from "../img/svg/mask.svg";

const Hero = () => {
    return (
        <StyledHero>
            <div className="header-container">
                {/* Logo */}
                <Logo />
                {/* Contact info */}
                <div className="header-info">
                    <div className="phone-container">
                        <img src={Phone} alt="Phone icon" />
                        <div>(203) 690-0552</div>
                    </div>
                    <div className="email-container">
                        <img src={Mail} alt="Mail icon" />
                        <div>info@unictiles.com</div>
                    </div>
                </div>
                {/* Menu */}
                <div className="menu-container"></div>
                {/* Social Icons */}
                <div className="social-icons-container"></div>
            </div>
            {/* Page Content */}
            <div className="page-content-container">
                {/* Slider */}
                <div className="slider"></div>
                {/* Get Quote */}
                <div className="get-quote"></div>
            </div>
            <img class="background-mask" src={Mask} alt="" />
        </StyledHero>
    );
};

const StyledHero = styled(motion.div)`
    position: relative;
    /* overflow-x: hidden; */
    /* height: 100vh; */
    .header-container {
        display: flex;
        z-index: 2;
        .header-info {
            position: absolute;
            top: 0;
            background: #525355;
            width: 100%;
            height: 3.5vw;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .phone-container,
            .email-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 2vw;
                img {
                    width: 2vw;
                    height: 2vw;
                }

                div {
                    margin: 0 0.5vw;
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 2.2rem;
                }
            }
        }

        .menu-container {
            position: absolute;
            top: 3.462vw;
            left: 22.35vw;
            height: 2.5vw;
            width: calc(100% - 22.35vw);
            display: flex;
            clip-path: polygon(1.3% 0, 100% 0%, 100% 100%, 0 100%);
            background: rgba(0, 0, 0, 0.6);
            z-index: inherit;
        }

        .social-icons-container {
            position: absolute;
            top: 8vw;
            clip-path: polygon(0 0, 91.2% 0, 100% 100%, 0 100%);
            background: rgba(0, 0, 0, 0.6);
            height: 2.5vw;
            width: 23.03vw;
            z-index: inherit;
        }
    }
    .page-content-container {
        z-index: 1;
        .slider {
            position: absolute;
            top: 3.462vw;
            left: 11vw;
            clip-path: polygon(
                14.05% 0,
                100% 0%,
                100% 100%,
                67.9% 100%,
                11.9% 7%
            );
            background: green;
            height: 66.9vw;
            width: calc(100% - 11vw);
        }
        .get-quote {
            position: absolute;
            top: 8vw;
            clip-path: polygon(0 0, 31.3% 0, 100% 100%, 0% 100%);
            background: red;
            height: 58vw;
            width: 67.1vw;
        }
    }
    .background-mask {
        position: absolute;
        width: 100%;
        top: 3.4vw;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export default Hero;
