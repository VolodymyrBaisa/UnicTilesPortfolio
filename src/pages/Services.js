import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
//Images
import backsplash from "../img/services/backsplash.jpg";
import bathroom from "../img/services/bathroom.jpg";
import floor from "../img/services/floor.jpg";
import kitchen from "../img/services/kitchen.jpg";
import repair_removal from "../img/services/repair_removal.jpg";
import stone from "../img/services/stone.jpg";
//Icons
import iconBacksplash from "../img/svg/backsplash.svg";
import iconBath from "../img/svg/bath.svg";
import iconFloor from "../img/svg/floor.svg";
import iconKitchen from "../img/svg/forkknife.svg";
import iconRepair_removal from "../img/svg/wrench.svg";
import iconStone from "../img/svg/stone.svg";

const cards = [
    {
        image: { bathroom },
        headerIcon: { iconBath },
        headerText: "BATHROOM",
        shortText: `As one of the most used rooms in your home,
        your bathroom deserves to look beautiful. 
        It’s where you go to refresh, unwind, and 
        prepare yourself to begin and end the day. 
        Every size bathroom deserves the same care 
        and expertise. 
        Let Unic Tiles team turn them into comfortable, inviting retreats.`,
        longText: `long text`,
    },
    {
        image: { repair_removal },
        headerIcon: { iconRepair_removal },
        headerText: "Repair & Removel",
        shortText: `We start with a free in-home estimate to assess 
        your specific situation. Our skilled tile installers 
        know all of the s and outs and can spot potential problem areas before they become actual issues.`,
        longText: `long text`,
    },
    {
        image: { kitchen },
        headerIcon: { iconKitchen },
        headerText: "KITCHEN",
        shortText: `Our expert tile installers will take time to make 
        sure you’re aware of all of your options, 
        show you samples, discuss your preferences, 
        consider your budget and find the right 
        solution for your project.`,
        longText: `long text`,
    },
    {
        image: { floor },
        headerIcon: { iconFloor },
        headerText: "FLOOR",
        shortText: `As one of the most used rooms in your home,
        your bathroom deserves to look beautiful. 
        It’s where you go to refresh, unwind, and 
        prepare yourself to begin and end the day. 
        Every size bathroom deserves the same care 
        and expertise. 
        Let Unic Tiles team turn them into comfortable, inviting retreats.`,
        longText: `long text`,
    },
    {
        image: { backsplash },
        headerIcon: { iconBacksplash },
        headerText: "Backsplash",
        shortText: `We start with a free in-home estimate to assess 
        your specific situation. Our skilled tile installers 
        know all of the s and outs and can spot potential problem areas before they become actual issues.`,
        longText: `long text`,
    },
    {
        image: { stone },
        headerIcon: { iconStone },
        headerText: "STONE",
        shortText: `Our expert tile installers will take time to make 
        sure you’re aware of all of your options, 
        show you samples, discuss your preferences, 
        consider your budget and find the right 
        solution for your project.`,
        longText: `long text`,
    },
];

const Services = () => {
    return (
        <StyledServices>
            <SectionHeader sText={"Our Services"} sColor={"#46423D"} />
            <div className="card-wrapper">
                {cards.length > 0 &&
                    cards.map((card, index) => <Card {...card} key={index} />)}
            </div>
        </StyledServices>
    );
};

const StyledServices = styled(motion.div)`
    height: 70rem;
    position: relative;
    z-index: 0;

    .card-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        margin: 0 8rem;
    }

    @media screen and (max-width: 800px) {
        .card-wrapper {
            grid-template-columns: repeat(2, 1fr);
            margin: 0 4rem;
        }
    }

    @media screen and (max-width: 600px) {
        .card-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 0 3rem;
        }
    }
`;

export default Services;
