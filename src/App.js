import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import HeroMob from "./pages/mobile/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactMob from "./pages/mobile/Contact";
import GetQuoteDialog from "./pages/GetQuoteDialog";
//Utils
import { useMediaQuery } from "./utils/MediaQuery";
//Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
    const isPageWidthMin800 = useMediaQuery("(min-width: 801px)");
    return (
        <Router>
            <Route path={["/getfreequote", "/"]}>
                <GlobalStyles />
                <GetQuoteDialog />
                {isPageWidthMin800 ? <Hero /> : <HeroMob />}
                <Services />
                <Portfolio />
                <About />
                {isPageWidthMin800 ? <Contact /> : <ContactMob />}
            </Route>
        </Router>
    );
}

export default App;
