import React from "react";
//Utils
import { useMediaQuery } from "../utils/MediaQuery";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import menu from "../img/svg/menu.svg";

const menuItemAnimation = {
    tap: { scale: 0.9 },
};

const Menu = ({ menuArray }) => {
    const isPageWidthMin800 = useMediaQuery("(min-width: 801px)");
    return (
        <StyledMenu>
            {isPageWidthMin800 ? (
                <ul>
                    {menuArray.length > 0 &&
                        menuArray.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={menuItemAnimation}
                                whileTap="tap"
                            >
                                {item.text}
                            </motion.li>
                        ))}
                </ul>
            ) : (
                <img className="menu" src={menu} alt="Main menu" />
            )}
        </StyledMenu>
    );
};

const StyledMenu = styled(motion.div)`
    /* Menu style if window size bigger then 800px */
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        li {
            position: relative;
            color: #ffffff;
            font-size: 1.8rem;
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
                margin-top: 0.6rem;
                -webkit-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }
            &:hover:after {
                width: 100%;
            }
        }
    }

    /*Menu style if window size min 800px*/
    .menu {
        width: 3.5rem;
        cursor: pointer;
    }
`;

export default Menu;
