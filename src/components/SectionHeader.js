import React, { useEffect } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionHeaderAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const SectionHeader = ({ sText, sColor }) => {
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
        <StyledSectionHeader
            ref={ref}
            variants={sectionHeaderAnimation}
            animate={controls}
            initial="hidden"
            sColor={sColor}
        >
            {sText}
        </StyledSectionHeader>
    );
};

const StyledSectionHeader = styled(motion.div)`
    position: relative;
    font-weight: 800;
    font-size: 3.8rem;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: ${(props) => props.sColor};
    margin-bottom: 4.5rem;

    &:before {
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        content: "";
        margin: 5rem auto;
        width: 10rem;
        background: #ebb02d;
        height: 0.5rem;
    }
`;

export default SectionHeader;
