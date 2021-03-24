import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Components
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
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

    return (
        <StyledContactForm
            variants={contactFormAnimation}
            initial="hidden"
            animate={controls}
            ref={ref}
        >
            <Input label={"Full Name"} icon={user} />
            <Input label={"Email"} icon={email2} />
            <Textarea label={"Message"} />
            <Button text={"Submit"} link={"#"} />
        </StyledContactForm>
    );
};
const StyledContactForm = styled(motion.div)`
    background: #fff;
    box-shadow: 0 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
    padding: 2rem 1rem;
`;

export default ContactForm;
