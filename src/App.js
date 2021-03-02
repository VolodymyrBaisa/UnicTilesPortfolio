import Hero from "./pages/Hero";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
//Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
    return (
        <>
            <GlobalStyles />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </>
    );
}

export default App;
