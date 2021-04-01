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
//Containers
import mask from "../../img/svg/mask-up.svg";
//Storage
import storage from "../../utils/Storage";

const Hero = () => {
    return (
        <StyledHero id="home">
            <div className="header-container">
                {/* Contact info */}
                <div className="header-info">
                    <ShortContacts
                        tPhone={storage.contacts.phone1}
                        tMail={storage.contacts.email}
                    />
                </div>
                {/* Logo */}
                <div className="logo">
                    <Logo />
                </div>
                {/* Menu */}
                <div className="social-icons-and-menu-container">
                    <SocialIcons icons={storage.socialIcons} />
                    <Menu menuArray={storage.menuArray} isHeaderMenu={true} />
                </div>
            </div>
            {/* Page Content */}
            <div className="page-content-container">
                {/* Slider */}
                <Slider sliders={storage.sliders} interval={5000} />
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
