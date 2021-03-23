import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
//Icons
import user from "../img/svg/user.svg";
import email2 from "../img/svg/mail2.svg";

const ContactForm = () => {
    return (
        <StyledContactForm>
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
