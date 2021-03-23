import React, { useState, useCallback } from "react";
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
    const [elementWidth, setElementWidth] = useState(0);

    const getElementsWidth = (el) => {
        const imgWidth = el.target.querySelector("img")?.offsetWidth;
        const divWidth = el.target.querySelector("div")?.offsetWidth;

        return imgWidth + divWidth + 10;
    };

    return (
        <StyledContacts elementWidth={elementWidth}>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
                onMouseOver={(e) => setElementWidth(getElementsWidth(e))}
            >
                <img src={mapPin} alt="Map pin icon" />
                <div>{tAddress}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
                onMouseOver={(e) => setElementWidth(getElementsWidth(e))}
            >
                <img src={email} alt="Email icon" />
                <div>{tEmail}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
                onMouseOver={(e) => setElementWidth(getElementsWidth(e))}
            >
                <img src={phone} alt="Phone icon" />
                <div>{tPhone1}</div>
            </motion.div>
            <motion.div
                className="container"
                variants={contactsAnimation}
                whileTap="tap"
                onMouseOver={(e) => setElementWidth(getElementsWidth(e))}
            >
                <img src={phone} alt="Phone icon" />
                <div>{tPhone2}</div>
            </motion.div>
        </StyledContacts>
    );
};

const StyledContacts = styled(motion.div)`
    display: inline-block;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        cursor: pointer;
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
            width: ${(props) => props.elementWidth + "px"};
        }
        img {
            width: 2.8rem;
            height: 2.8rem;
            pointer-events: none;
        }
        /*Phone*/
        div {
            margin: 0 0.5vw;
            color: #525355;
            font-weight: 800;
            font-size: 2.2rem;
            pointer-events: none;
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
