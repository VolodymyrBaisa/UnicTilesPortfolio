import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import phone from "../img/svg/phone.svg";
import mail from "../img/svg/mail.svg";

const contactsAnimation = {
    tap: { scale: 0.9 },
};

const ShortContacts = ({ tPhone, tMail }) => {
    return (
        <StyledShortContacts>
            <motion.div
                className="phone-container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={phone} alt="Phone icon" />
                <a href={"tel:" + tPhone}>{tPhone}</a>
            </motion.div>
            <motion.div
                className="email-container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={mail} alt="Mail icon" />
                <a href={"mailto:" + tMail}>{tMail}</a>
            </motion.div>
        </StyledShortContacts>
    );
};

const StyledShortContacts = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .phone-container,
    .email-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        cursor: pointer;

        &:after {
            transition: all 0.2s ease;
            position: absolute;
            content: "";
            display: block;
            width: 0;
            overflow: hidden;
            border-bottom: 0.4rem solid #ebb02d;
            margin-top: 4.3rem;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        &:hover:after {
            width: 100%;
        }
        img {
            width: 2.8rem;
            height: 2.8rem;
        }
        /*Phone*/
        a {
            margin: 0 0.5vw;
            color: #ffffff;
            font-weight: 600;
            font-size: 2.2rem;
            text-decoration: none;
        }
    }

    .phone-container {
        margin-right: 2em;
    }

    @media screen and (max-width: 800px) {
        justify-content: space-around;
        .phone-container,
        .email-container {
            img {
                width: 3.5rem;
                height: 3.5rem;
                margin-right: 0.5em;
            }
        }
    }
`;

export default ShortContacts;
