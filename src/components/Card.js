import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import arrowRight from "../img/svg/keyboard_arrow_right.svg";

const Card = ({ image, headerIcon, headerText, shortText }) => {
    return (
        <StyledCard>
            {image && (
                <img
                    className="image"
                    src={Object.values(image)}
                    alt={headerIcon}
                />
            )}
            <div className="content-wrapper">
                <div className="header-wrapper">
                    {headerIcon && (
                        <img
                            className="icon"
                            src={Object.values(headerIcon)}
                            alt=""
                        />
                    )}
                    {headerText && <div>{headerText}</div>}
                </div>
                {shortText && (
                    <div className="short-description">{shortText}</div>
                )}
                <div className="learn-more-wrapper">
                    <div>Learn More</div>
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)`
    .image {
        max-width: 100%;
    }
    .content-wrapper {
        padding: 0 2rem;
        .header-wrapper {
            position: relative;
            display: flex;
            margin-bottom: 1.5rem;
            &:after {
                position: absolute;
                display: block;
                top: 6rem;
                right: 0;
                left: 0;
                content: "";
                height: 0.2rem;
                width: 100%;
                background: #9a9084;
            }
            img {
                width: 2.5rem;
                margin-right: 1rem;
            }

            div {
                font-style: normal;
                font-weight: bold;
                font-size: 2rem;
                line-height: 3em;
                text-align: center;
                letter-spacing: 0.095em;
                text-transform: uppercase;
            }
        }
        .short-description {
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
        .learn-more-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            margin: 2rem 0 3rem 0;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                display: block;
                background: #ebb02d;
                height: 0.2rem;
                width: 16.8rem;
            }
            div {
                font-size: 2rem;
                font-weight: 600;
                line-height: 31px;
                letter-spacing: 0.095em;
                color: #ebb02d;
                text-transform: uppercase;
            }
            img {
                margin-left: 1rem;
                width: 2rem;
            }
        }
    }
`;

export default Card;
