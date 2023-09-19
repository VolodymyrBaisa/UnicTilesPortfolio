import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const socialIconAnimation = {
    tap: { scale: 0.9 },
};

const SocialIcons = ({ icons }) => {
    const [getImageWidth, setImageWidth] = useState(0);
    const handleImgHover = (e) => {
        setImageWidth(e.target?.clientWidth);
    };

    return (
        <StyledSocialIcons getImageWidth={getImageWidth}>
            {icons.length > 0 &&
                icons.map((icon, index) => {
                    return (
                        <div key={index}>
                            <a href={icon.link} target="_blank">
                                <motion.img
                                    onMouseOver={handleImgHover}
                                    src={icon.icon}
                                    alt=""
                                    variants={socialIconAnimation}
                                    whileTap="tap"
                                />
                            </a>
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
            width: ${(props) => props.getImageWidth + "px"};
        }
    }
    img {
        /*width: 2.5rem;*/
        height: 2.5rem;
    }

    @media screen and (max-width: 800px) {
        img {
            height: 3.5rem;
        }
        div {
            &:after {
                margin-top: 0.7rem;
            }
        }
    }
`;
export default SocialIcons;
