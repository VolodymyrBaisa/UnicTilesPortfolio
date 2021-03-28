import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../../components/SectionHeader";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import SocialIcons from "../../components/SocialIcons";
import ShortContacts from "../../components/ShortContacts";
import Map from "../../components/Map";
import Contacts from "../../components/Contacts";
//Container
import contactUsBackground from "../../img/svg/contact-us-background-mob.svg";
import maskFooter from "../../img/svg/mask_footer.svg";
//Icons
import instagram from "../../img/svg/instagram.svg";
import facebook from "../../img/svg/facebook.svg";

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
        <StyledContact bg={contactUsBackground} mask={maskFooter} id="contact">
            <div className="contact-container">
                <SectionHeader sText={"Contact us"} sColor={"#FFFFFF"} />
                <div className="wrapper">
                    <div className="contact-information">
                        <Contacts
                            tAddress={"2537 Post Rd Southport, CT 06890"}
                            tEmail={"info@unictiles.com"}
                            tPhone1={"(203) 690-0552"}
                            tPhone2={"(203) 895-8258"}
                        />
                    </div>
                    <div className="map">
                        <Map isMarkerShown />
                    </div>
                </div>
            </div>
            <div className="footer-container">
                {/* Logo */}
                <div className="logo">
                    <Logo />
                </div>
                {/* Menu */}
                <div className="social-icons-and-menu-container">
                    <SocialIcons icons={socialIcons} />
                    <Menu menuArray={menuArray} />
                </div>
                {/* Contact info */}
                <div className="bottom-info">
                    <ShortContacts
                        tPhone={"(203) 690-0552"}
                        tMail={"info@unictiles.com"}
                    />
                </div>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
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
            background: #fff;
            border-radius: 10rem 0 0 0;
            .contact-information {
                padding: 3rem 3rem 0 4rem;
                border-bottom: 0.2rem solid #525355;
                pointer-events: all;
            }
            .map {
                pointer-events: all;
            }
        }
    }
    .footer-container {
        display: flex;
        flex-direction: column;
        .logo {
            height: 12rem;
        }
        .social-icons-and-menu-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 1.1rem 2rem;
            background: rgba(0, 0, 0, 0.6);
            text-align: right;
            z-index: inherit;
        }
        .bottom-info {
            background: #525355;
            width: 100%;
            padding: 1.1rem 1rem;
            z-index: inherit;
        }
    }
`;

export default Contact;
