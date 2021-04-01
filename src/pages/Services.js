import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Components
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import LearnMorePopUp from "../components/LearnMorePopUp";
//Storage
import storage from "../utils/Storage";

const Services = () => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    return (
        <StyledServices id="tile services">
            <SectionHeader sText={"Our Services"} sColor={"#46423D"} />
            <AnimateSharedLayout type="crossfade">
                <div className="card-wrapper">
                    {storage.cards.length > 0 &&
                        storage.cards.map((card, index) => (
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
                                {...storage.cards[selectedCardId]}
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
