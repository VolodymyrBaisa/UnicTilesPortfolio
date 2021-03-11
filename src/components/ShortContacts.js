import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import phone from "../img/svg/phone.svg";
import mail from "../img/svg/mail.svg";

const ShortContacts = ({ tPhone, tMail }) => {
    return (
        <StyledShortContacts>
            <div className="phone-container">
                <img src={phone} alt="Phone icon" />
                <div>{tPhone}</div>
            </div>
            <div className="email-container">
                <img src={mail} alt="Mail icon" />
                <div>{tMail}</div>
            </div>
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

        div {
            margin: 0 0.5vw;
            color: #ffffff;
            font-weight: 600;
            font-size: 2.2rem;
        }
    }

    .phone-container {
        margin-right: 2em;
    }
`;

export default ShortContacts;
