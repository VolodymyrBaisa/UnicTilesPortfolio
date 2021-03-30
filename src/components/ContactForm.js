import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Components
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import InputButton from "../components/InputButton";
//Icons
import user from "../img/svg/user.svg";
import email2 from "../img/svg/mail2.svg";

const contactFormAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "tween",
        },
    },
};

const ContactForm = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const [sendSuccessRes, setSendSuccessRes] = useState(0);

    const setSuccessResWithTimeout = (id) => {
        setSendSuccessRes(id);
        setTimeout(() => {
            setSendSuccessRes(0);
        }, 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ryl2hah",
                "template_nz8nnfy",
                e.target,
                "user_u27B7SQx346GXinwr6AIN"
            )
            .then(
                (result) => {
                    setSuccessResWithTimeout(1);
                },
                (error) => {
                    setSuccessResWithTimeout(2);
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <StyledContactForm
            variants={contactFormAnimation}
            initial="hidden"
            animate={controls}
            ref={ref}
        >
            <form onSubmit={sendEmail}>
                <Input
                    name="full_name"
                    label={"Full Name"}
                    icon={user}
                    required={true}
                />
                <Input
                    name="user_email"
                    label={"Email"}
                    icon={email2}
                    required={true}
                />
                <Textarea name="message" label={"Message"} required={true} />
                <InputButton success={sendSuccessRes} />
            </form>
        </StyledContactForm>
    );
};
const StyledContactForm = styled(motion.div)`
    background: #fff;
    box-shadow: 0 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
    padding: 2rem 1rem;
`;

export default ContactForm;
