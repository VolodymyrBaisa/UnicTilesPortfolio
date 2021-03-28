import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Logo from "../../components/Logo";
import ShortContacts from "../../components/ShortContacts";
import Menu from "../../components/Menu";
import Slider from "../../components/Slider";
import SocialIcons from "../../components/SocialIcons";
import Button from "../../components/Button";
//Icons
import instagram from "../../img/svg/instagram.svg";
import facebook from "../../img/svg/facebook.svg";
//Containers
import mask from "../../img/svg/mask-up.svg";
//Img
import slider1 from "../../img/placeholder/1.jpg";
import slider2 from "../../img/placeholder/2.jpg";
import slider3 from "../../img/placeholder/3.jpg";
import slider4 from "../../img/placeholder/4.jpg";

const sliders = [slider1, slider2, slider3, slider4];

const socialIcons = [
    { icon: instagram, link: "#" },
    { icon: facebook, link: "#" },
];

const menuArray = [
    { text: "Home", link: "#" },
    { text: "Tile Services", link: "#" },
    { text: "Portfolio", link: "#" },
    { text: "About Us", link: "#" },
    { text: "Contact", link: "#" },
];

const Hero = () => {
    return (
        <StyledHero id="home">
            <div className="header-container">
                {/* Contact info */}
                <div className="header-info">
                    <ShortContacts
                        tPhone={"(203) 690-0552"}
                        tMail={"info@unictiles.com"}
                    />
                </div>
                {/* Logo */}
                <div className="logo">
                    <Logo />
                </div>
                {/* Menu */}
                <div className="social-icons-and-menu-container">
                    <SocialIcons icons={socialIcons} />
                    <Menu menuArray={menuArray} isHeaderMenu={true} />
                </div>
            </div>
            {/* Page Content */}
            <div className="page-content-container">
                {/* Slider */}
                <Slider sliders={sliders} interval={5000} />
                <div className="get-free-quote">
                    <Button
                        text={"Get free quote"}
                        fontSize={"2.4rem"}
                        link={"#"}
                    />
                </div>
            </div>
            <img className="background-mask" src={mask} alt="" />
        </StyledHero>
    );
};

const StyledHero = styled(motion.div)`
    position: relative;
    height: 80rem;
    z-index: 1;
    .header-container {
        z-index: 2;
        .header-info {
            position: relative;
            background: #525355;
            width: 100%;
            padding: 1.1rem 1rem;
            z-index: inherit;
        }
        .logo {
            position: relative;
            z-index: 2;
            height: 12rem;
        }
        .social-icons-and-menu-container {
            position: relative;
            top: 0.2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 1.1rem 2rem;
            background: rgba(0, 0, 0, 0.6);
            text-align: right;
            z-index: inherit;
        }
    }
    .page-content-container {
        z-index: 1;
        position: absolute;
        top: 12.5rem;
        width: 100%;
        .get-free-quote {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    .background-mask {
        position: absolute;
        width: 100%;
        height: 74rem;
        top: 10rem;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export default Hero;
