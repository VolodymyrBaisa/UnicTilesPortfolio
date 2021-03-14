import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const SocialIcons = ({ icons }) => {
    return (
        <StyledSocialIcons>
            {icons.length > 0 &&
                icons.map((icon, index) => {
                    return (
                        <div key={index}>
                            <img src={icon.icon} alt="" />
                        </div>
                    );
                })}
        </StyledSocialIcons>
    );
};
const StyledSocialIcons = styled(motion.div)`
    display: flex;
    align-items: center;
    div {
        margin-right: 1.5rem;
        cursor: pointer;
        &:after {
            transition: all 0.2s ease;
            position: absolute;
            content: "";
            display: block;
            width: 0;
            overflow: hidden;
            border-bottom: 0.4rem solid #ebb02d;
            margin-top: 0.1rem;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        &:hover:after {
            width: 2.5rem;
        }
    }
    img {
        width: 2.5rem;
    }

    @media screen and (max-width: 800px) {
        img {
            width: 3.5rem;
        }
        div {
            &:after {
                margin-top: 0.7rem;
            }
            &:hover:after {
                width: 3.5rem;
            }
        }
    }
`;
export default SocialIcons;
