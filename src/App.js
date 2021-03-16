import Hero from "./pages/Hero";
import HeroMob from "./pages/mobile/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
//Utils
import { useMediaQuery } from "./utils/MediaQuery";
//Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
    const isPageWidthMin800 = useMediaQuery("(min-width: 801px)");
    return (
        <>
            <GlobalStyles />
            {isPageWidthMin800 ? <Hero /> : <HeroMob />}
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </>
    );
}

export default App;
