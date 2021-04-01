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
//Storage
import storage from "../../utils/Storage";

const Contact = () => {
    return (
        <StyledContact bg={contactUsBackground} mask={maskFooter} id="contact">
            <div className="contact-container">
                <SectionHeader sText={"Contact us"} sColor={"#FFFFFF"} />
                <div className="wrapper">
                    <div className="contact-information">
                        <Contacts
                            tAddress={storage.contacts.address}
                            tEmail={storage.contacts.email}
                            tPhone1={storage.contacts.phone1}
                            tPhone2={storage.contacts.phone2}
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
                    <SocialIcons icons={storage.socialIcons} />
                    <Menu menuArray={storage.menuArray} />
                </div>
                {/* Contact info */}
                <div className="bottom-info">
                    <ShortContacts
                        tPhone={storage.contacts.phone1}
                        tMail={storage.contacts.email}
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
