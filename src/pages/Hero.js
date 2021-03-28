import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Logo from "../components/Logo";
import ShortContacts from "../components/ShortContacts";
import Menu from "../components/Menu";
import Slider from "../components/Slider";
import SocialIcons from "../components/SocialIcons";
import GetQuoteBox from "../components/GetQuoteBox";
//Icons
import instagram from "../img/svg/instagram.svg";
import facebook from "../img/svg/facebook.svg";
//Containers
import mask from "../img/svg/mask-up.svg";
//Img
import slider1 from "../img/placeholder/1.jpg";
import slider2 from "../img/placeholder/2.jpg";
import slider3 from "../img/placeholder/3.jpg";
import slider4 from "../img/placeholder/4.jpg";

const sliders = [slider1, slider2, slider3, slider4];

const socialIcons = [
    { icon: instagram, link: "https://www.instagram.com/unic_tiles" },
    {
        icon: facebook,
        link: "https://www.facebook.com/Unic-Tiles-1837680899810627/",
    },
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
                {/* Logo */}
                <Logo />
                {/* Contact info */}
                <div className="header-info">
                    <ShortContacts
                        tPhone={"(203) 690-0552"}
                        tMail={"info@unictiles.com"}
                    />
                </div>
                {/* Menu */}
                <div className="menu-container">
                    <Menu menuArray={menuArray} />
                </div>
                {/* Social Icons */}
                <div className="social-icons-container">
                    <SocialIcons icons={socialIcons} />
                </div>
            </div>
            {/* Page Content */}
            <div className="page-content-container">
                {/* Slider */}
                <Slider sliders={sliders} interval={5000} />
                {/* Get Quote */}
                <div className="get-quote">
                    <GetQuoteBox
                        btnText={"Get free quote"}
                        btnLink={"#"}
                        qHeder={
                            "RESIDENTIAL AND COMMERCIAL TILE INSTALLATION CONTRACTOR"
                        }
                        qText={`
                Our top-notch design team and highly skilled
                flooring tile installation

                professionals create stunning tiling 
                masterpieces, backsplash ideas,

                and backsplash designs that we promise you will enjoy.`}
                    />
                </div>
            </div>
            <img className="background-mask" src={mask} alt="" />
        </StyledHero>
    );
};

const StyledHero = styled(motion.div)`
    position: relative;
    height: 70rem;
    z-index: 1;
    .header-container {
        display: flex;
        z-index: 2;
        .header-info {
            position: absolute;
            top: 0;
            background: #525355;
            width: 100%;
            padding: 1.1rem 2rem;
            z-index: inherit;
        }

        .menu-container {
            position: absolute;
            top: 5rem;
            width: 100%;
            padding: 1.1rem 2rem;
            background: rgba(0, 0, 0, 0.6);
            text-align: right;
            z-index: inherit;
        }

        .social-icons-container {
            position: absolute;
            top: 12.2rem;
            padding: 0.5rem 2rem;
            background: rgba(0, 0, 0, 0.6);
            width: 36rem;
            z-index: 1000;
        }
    }
    .page-content-container {
        position: relative;
        top: 4rem;
        z-index: 1;
        .get-quote {
            position: absolute;
            width: 36rem;
            top: 18rem;
            z-index: 1;
        }
    }
    .background-mask {
        position: absolute;
        width: 100%;
        height: 70rem;
        top: 5rem;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export default Hero;
