import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import ShortContacts from "../components/ShortContacts";
//Container
import contactUsBackground from "../img/svg/contact-us-background.svg";
import maskFooter from "../img/svg/mask_footer.svg";
//Icons
import instagram from "../img/svg/instagram.svg";
import facebook from "../img/svg/facebook.svg";

const menuArray = [
    { text: "Home", link: "#" },
    { text: "Tile Services", link: "#" },
    { text: "Portfolio", link: "#" },
    { text: "About Us", link: "#" },
    { text: "Contact", link: "#" },
];

const socialIcons = [
    { icon: instagram, link: "#" },
    { icon: facebook, link: "#" },
];

const Contact = () => {
    return (
        <StyledContact bg={contactUsBackground} mask={maskFooter}>
            <div className="contact-container">
                <SectionHeader sText={"Contact us"} sColor={"#FFFFFF"} />
                <div className="wrapper">
                    <div className="contact-form">1</div>
                    <div className="map-contact-information">
                        <div className="map">2</div>
                        <div className="contact-information">3</div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="logo">
                    <Logo />
                </div>
                <div className="mask-wrapper">
                    <Button text={"Get free quote"} link={"#"} />
                </div>
                <div className="contact-info">
                    <ShortContacts
                        tPhone={"(203) 690-0552"}
                        tMail={"info@unictiles.com"}
                    />
                    <SocialIcons icons={socialIcons} />
                </div>
                <div className="menu">
                    <Menu menuArray={menuArray} />
                </div>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
    position: relative;
    z-index: 1;
    background: #b8b8b8;
    .contact-container {
        position: relative;
        height: 70rem;
        width: 100%;
        background-image: url(${(props) => props.bg});
        background-repeat: no-repeat;
        background-size: cover;
        padding: 8rem 0 0 0;

        .wrapper {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            top: 10rem;
            display: flex;
            height: calc(100% - 10rem);
            .contact-form {
                width: 54rem;
            }
            .map-contact-information {
                position: relative;
                z-index: -1;
                width: 100%;
                display: flex;
                flex-direction: column;
                .map {
                    flex-basis: 50%;
                    background: #fff;
                }
                .contact-information {
                    flex-basis: 50%;
                    background: #fff;
                }
            }
        }
    }
    .footer-container {
        .logo {
            transform: translateY(-2rem);
        }
        .mask-wrapper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 10.3rem;
            background-image: url(${(props) => props.mask});
            background-repeat: no-repeat;
            background-size: cover;
            padding: 3rem 2rem 0 0;
        }
        .contact-info {
            background: #414243;
            display: flex;
            justify-content: space-between;
            padding: 1.1rem 1rem 1.1rem 3rem;
        }
        .menu {
            padding: 1.1rem 2rem;
            background: #29292a;
        }
    }
`;

export default Contact;
