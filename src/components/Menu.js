import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Menu = ({ menuArray }) => {
    return (
        <StyledMenu>
            <ul>
                {menuArray.length > 0 &&
                    menuArray.map((item, index) => (
                        <motion.li key={index}>{item.text}</motion.li>
                    ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled(motion.div)`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        li {
            position: relative;
            color: #ffffff;
            font-size: 1.6rem;
            list-style: none;
            margin-left: 2.5rem;
            cursor: pointer;
            &:after {
                transition: all 0.2s ease;
                position: absolute;
                content: "";
                display: block;
                width: 0;
                overflow: hidden;
                border-bottom: 0.4rem solid #ebb02d;
                margin-top: 0.7rem;
                -webkit-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }
            &:hover:after {
                width: 100%;
            }
        }
    }
`;

export default Menu;
