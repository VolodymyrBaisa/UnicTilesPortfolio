import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import mapPin from "../img/svg/map-pin.svg";
import email from "../img/svg/mail3.svg";
import phone from "../img/svg/phone2.svg";

const contactsAnimation = {
    tap: { scale: 0.9 },
};

const Contacts = ({ tAddress, tEmail, tPhone1, tPhone2 }) => {
    return (
        <StyledContacts>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={mapPin} alt="Map pin icon" />
                <div>{tAddress}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={email} alt="Email icon" />
                <div>{tEmail}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={phone} alt="Phone icon" />
                <div>{tPhone1}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
            >
                <img src={phone} alt="Phone icon" />
                <div>{tPhone2}</div>
            </motion.div>
        </StyledContacts>
    );
};

const StyledContacts = styled(motion.div)`
    display: flex;
    flex-direction: column;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        cursor: pointer;
        width: auto;
        margin-bottom: 2.5rem;

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

        div {
            margin: 0 0.5vw;
            color: #525355;
            font-weight: 800;
            font-size: 2.2rem;
        }
    }

    @media screen and (max-width: 800px) {
        justify-content: space-around;
        .container {
            img {
                width: 3.5rem;
                height: 3.5rem;
                margin-right: 0.5em;
            }
        }
    }
`;

export default Contacts;
