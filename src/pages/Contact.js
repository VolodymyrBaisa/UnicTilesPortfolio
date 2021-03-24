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
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import Contacts from "../components/Contacts";
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
                    <motion.div className="contact-form">
                        <ContactForm />
                    </motion.div>
                    <div className="map-contact-information">
                        <div className="map">
                            <Map isMarkerShown />
                        </div>
                        <div className="contact-information">
                            <Contacts
                                tAddress={"2537 Post Rd Southport, CT 06890"}
                                tEmail={"info@unictiles.com"}
                                tPhone1={"(203) 690-0552"}
                                tPhone2={"(203) 895-8258"}
                            />
                        </div>
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
        pointer-events: none;

        .wrapper {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            top: 12rem;
            display: flex;
            height: calc(100% - 12rem);

            .contact-form {
                width: 52rem;
                padding: 0 2rem;
                pointer-events: all;
            }
            .map-contact-information {
                position: relative;
                z-index: -1;
                width: 100%;
                display: flex;
                flex-direction: column;
                pointer-events: all;
                .map {
                    height: 30rem;
                    background: #fff;
                    padding-top: 6rem;
                }
                .contact-information {
                    height: 100%;
                    background: #fff;
                    border-top: 0.1rem solid #525355;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    /* Footer */
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
