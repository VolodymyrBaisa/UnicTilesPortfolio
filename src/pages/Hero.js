import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Logo from "../components/Logo";
import Menu from "../components/Menu";
//Icons
import phone from "../img/svg/phone.svg";
import mail from "../img/svg/mail.svg";
import instagram from "../img/svg/instagram.svg";
//Containers
import mask from "../img/svg/mask.svg";
import sliderMask from "../img/svg/slider_mask.svg";
//Img
import slider from "../img/placeholder/rectangle.png";

const Hero = () => {
    return (
        <StyledHero>
            <div className="header-container">
                {/* Logo */}
                <Logo />
                {/* Contact info */}
                <div className="header-info">
                    <div className="phone-container">
                        <img src={phone} alt="Phone icon" />
                        <div>(203) 690-0552</div>
                    </div>
                    <div className="email-container">
                        <img src={mail} alt="Mail icon" />
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
                <div className="slider">
                    <img className="slider-item" src={slider} alt="" />
                </div>
                {/* Get Quote */}
                <div className="get-quote"></div>
            </div>
            <img className="background-mask" src={mask} alt="" />
        </StyledHero>
    );
};

const StyledHero = styled(motion.div)`
    position: relative;
    .header-container {
        display: flex;
        z-index: 2;
        .header-info {
            position: absolute;
            top: 0;
            background: #525355;
            width: 100%;
            padding: 1.1rem 0;
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
                    width: 2.8rem;
                    height: 2.8rem;
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
            top: 5rem;
            left: 0vw;
            height: 2.5vw;
            width: 100%;
            display: flex;
            background: rgba(0, 0, 0, 0.6);
            z-index: inherit;
        }

        .social-icons-container {
            position: absolute;
            top: 12.5rem;
            background: rgba(0, 0, 0, 0.6);
            height: 2.5vw;
            width: 32.7rem;
            z-index: 1000;
        }
    }
    .page-content-container {
        z-index: 1;
        .slider {
            position: absolute;
            top: 5rem;
            left: 0;
            height: 94.5vh;
            width: 100%;

            svg {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
            }

            .slider-item {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center bottom;
                mask-image: url(${sliderMask});
                mask-size: 100vw 94.5vh;
                mask-repeat: no-repeat;
                mask-position: center;
            }
        }
    }
    .background-mask {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 5rem;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export default Hero;
