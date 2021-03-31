import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import LearnMorePopUp from "../components/LearnMorePopUp";
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
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
    },
    {
        image: { repair_removal },
        headerIcon: { iconRepair_removal },
        headerText: "Repair & Removel",
        shortText: `We start with a free in-home estimate to assess 
        your specific situation. Our skilled tile installers 
        know all of the s and outs and can spot potential problem areas before they become actual issues.`,
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
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
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
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
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
    },
    {
        image: { backsplash },
        headerIcon: { iconBacksplash },
        headerText: "Backsplash",
        shortText: `We start with a free in-home estimate to assess 
        your specific situation. Our skilled tile installers 
        know all of the s and outs and can spot potential problem areas before they become actual issues.`,
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
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
        longText: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
    },
];

const Services = () => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    return (
        <StyledServices id="tile services">
            <SectionHeader sText={"Our Services"} sColor={"#46423D"} />
            <AnimateSharedLayout type="crossfade">
                <div className="card-wrapper">
                    {cards.length > 0 &&
                        cards.map((card, index) => (
                            <Card
                                {...card}
                                index={index}
                                setSelectedCardId={setSelectedCardId}
                                key={index}
                            />
                        ))}
                </div>
                <AnimatePresence>
                    {(selectedCardId || selectedCardId === 0) && (
                        <div className="learn-more-wrapper">
                            <LearnMorePopUp
                                {...cards[selectedCardId]}
                                selectedCardId={selectedCardId}
                                setSelectedCardId={(id) =>
                                    setSelectedCardId(id)
                                }
                            />
                        </div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </StyledServices>
    );
};

const StyledServices = styled(motion.div)`
    min-height: 70rem;
    position: relative;
    z-index: 0;
    margin-top: 2rem;

    .card-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        margin: 0 6rem;
    }

    .learn-more-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        margin: 5rem;
    }

    @media screen and (max-width: 800px) {
        .card-wrapper {
            grid-template-columns: repeat(2, 1fr);
            margin: 0 3rem;
        }
    }

    @media screen and (max-width: 600px) {
        .card-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 0 3rem;
        }
        .learn-more-wrapper {
            margin: 5rem 1rem;
        }
    }
`;

export default Services;
