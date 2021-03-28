import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
//Utils
import { useMediaQuery } from "../utils/MediaQuery";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//Icons
import menu from "../img/svg/menu.svg";
import menuClose from "../img/svg/menu-close.svg";
import logo from "../img/svg/logo2.svg";

const menuClickItemAnimation = {
    tap: { scale: 0.9 },
};

const openMenuAnimation = {
    close: {
        width: 0,
        transition: {
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1],
        },
    },
    open: {
        width: 70 + "vw",
        transition: {
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1],
        },
    },
};

const menuOpenItemAnimation = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            x: { stiffness: 1000, velocity: -100 },
        },
    },
    close: {
        x: -50,
        opacity: 0,
        transition: {
            x: { stiffness: 1000 },
        },
    },
};

const menuOpenHeaderAnimation = {
    open: {
        opacity: 1,
        transition: {
            delay: 1,
            x: { stiffness: 1000, velocity: -100 },
        },
    },
    close: {
        opacity: 0,
        transition: {
            x: { stiffness: 1000 },
        },
    },
};

const Menu = ({ menuArray }) => {
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
    const isPageWidthMin800 = useMediaQuery("(min-width: 801px)");

    const scrollbar = () => {
        document.body.style.overflow = isMobileMenuShow ? "hidden" : null;
    };

    useEffect(() => {
        scrollbar();
    }, [isMobileMenuShow]);

    return (
        <StyledMenu>
            {isPageWidthMin800 ? (
                <ul>
                    {menuArray.length > 0 &&
                        menuArray.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={menuClickItemAnimation}
                                whileTap="tap"
                            >
                                <Link
                                    to={item.text.toLowerCase()}
                                    smooth={true}
                                    duration={800}
                                >
                                    {item.text}
                                </Link>
                            </motion.li>
                        ))}
                </ul>
            ) : (
                <>
                    <img
                        className="menu"
                        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
                        src={isMobileMenuShow ? menuClose : menu}
                        alt="Main menu"
                    />
                    <AnimatePresence>
                        {isMobileMenuShow && (
                            <motion.div
                                className="mobile-menu-wrapper"
                                variants={openMenuAnimation}
                                initial="close"
                                animate="open"
                                exit="close"
                            >
                                <motion.div
                                    className="mobile-menu-header"
                                    variants={menuOpenHeaderAnimation}
                                    initial="close"
                                    animate="open"
                                    exit="close"
                                >
                                    <img
                                        className="logo"
                                        src={logo}
                                        alt="logo"
                                    />
                                    <div className="logo-text">Unic Tiles</div>
                                </motion.div>
                                <motion.ul>
                                    {menuArray.length > 0 &&
                                        menuArray.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                variants={menuOpenItemAnimation}
                                                whileTap="tap"
                                                initial="close"
                                                animate="open"
                                                exit="close"
                                            >
                                                <Link
                                                    to={item.text.toLowerCase()}
                                                    smooth={true}
                                                    duration={800}
                                                    onClick={() =>
                                                        setIsMobileMenuShow(
                                                            false
                                                        )
                                                    }
                                                >
                                                    {item.text}
                                                </Link>
                                            </motion.li>
                                        ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
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

    .mobile-menu-wrapper {
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        background: #fff;
        border-right: 0.2rem solid #27272b;
        .mobile-menu-header {
            width: 100%;
            height: 7.5rem;
            background: #ebb02d;
            display: flex;
            align-items: center;
            .logo {
                height: 7rem;
                margin: 0 0.5rem;
            }
            .logo-text {
                text-transform: uppercase;
                font-size: 4rem;
                font-weight: bold;
                color: #46423d;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 60rem;
            li {
                color: #46423d;
                font-size: 4rem;
                font-weight: bold;
                margin-left: 0;
                margin-bottom: 2rem;
            }
        }

        li:last-child {
            margin-bottom: 0;
        }
    }
`;

export default Menu;
