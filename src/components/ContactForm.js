import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Components
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import InputButton from "../components/InputButton";
import Message from "../components/Message";
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

    const [messageObj, setMessageObj] = useState({
        title: "",
        message: "",
        isShown: false,
    });

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
                    setMessageObj({
                        title: "Success!",
                        message:
                            "Thank you for taking the time to send through the information!",
                        isShown: true,
                    });
                },
                (error) => {
                    setSuccessResWithTimeout(2);
                    setMessageObj({
                        title: "Oh No!",
                        message: "Message was not delivered",
                        isShown: true,
                    });
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
                <div className="textarea-wrapper">
                    <Textarea
                        name="message"
                        label={"Message"}
                        required={true}
                    />
                </div>
                <InputButton success={sendSuccessRes} />
            </form>
            <AnimatePresence>
                {messageObj.isShown && (
                    <Message
                        title={messageObj.title}
                        message={messageObj.message}
                        type={messageObj.type}
                        closeCallback={(close) => {
                            setMessageObj({ ...messageObj, isShown: !close });
                        }}
                    />
                )}
            </AnimatePresence>
        </StyledContactForm>
    );
};
const StyledContactForm = styled(motion.div)`
    background: #fff;
    box-shadow: 0 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
    padding: 2rem 1rem;
    .textarea-wrapper {
        height: 25rem;
        margin-bottom: 5rem;
    }
`;

export default ContactForm;
