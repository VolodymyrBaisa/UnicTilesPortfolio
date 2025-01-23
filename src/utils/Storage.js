//Slider Images
import slider1 from "../img/slider/1.jpg";
import slider2 from "../img/slider/2.jpg";
import slider3 from "../img/slider/3.jpg";
import slider4 from "../img/slider/4.jpg";
import slider5 from "../img/slider/5.jpg";
import slider6 from "../img/slider/6.jpg";
import slider7 from "../img/slider/7.jpg";
import slider8 from "../img/slider/8.jpg";
import slider9 from "../img/slider/9.jpg";
import slider10 from "../img/slider/10.jpg";
import slider11 from "../img/slider/11.jpg";
import slider12 from "../img/slider/12.jpg";
import slider13 from "../img/slider/13.jpg";
import slider14 from "../img/slider/14.jpg";
import slider15 from "../img/slider/15.jpg";
import slider16 from "../img/slider/16.jpg";
import slider17 from "../img/slider/17.jpg";
import slider18 from "../img/slider/18.jpg";
import slider19 from "../img/slider/19.jpg";
import slider20 from "../img/slider/20.jpg";

//Social Icons
import instagram from "../img/svg/instagram.svg";
import facebook from "../img/svg/facebook.svg";
import homeadvisor from "../img/svg/homeadvisor.svg";
import betterBusinessBureau from "../img/svg/better-business-bureau.svg";

//Service Card
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

const storage = {
    //Social Icons
    socialIcons: [
        { icon: instagram, link: "https://www.instagram.com/unic_tiles" },
        {
            icon: facebook,
            link: "https://www.facebook.com/unictiles/",
        },
        {
            icon: homeadvisor,
            link: "https://www.homeadvisor.com/rated.UnicTiles.107162783.html",
        },
        // {
        //     icon: betterBusinessBureau,
        //     link: "https://www.bbb.org/us/ct/southport/profile/tile-installation/unic-tiles-llc-0111-110077617/",
        // },
    ],
    //Menu
    menuArray: [
        { text: "Home", link: "home" },
        { text: "Tile Services", link: "tile Services" },
        { text: "Portfolio", link: "portfolio" },
        { text: "About Us", link: "about us" },
        { text: "Contact", link: "contact" },
    ],
    //Sliders for hero/home page
    sliders: [slider1, slider2, slider3, slider4],
    //Sliders for portfolio
    slidersPortfolio: [
        slider1,
        slider2,
        slider3,
        slider4,
        slider5,
        slider6,
        slider7,
        slider8,
        slider9,
        slider10,
        slider11,
        slider12,
        slider13,
        slider14,
        slider15,
        slider16,
        slider17,
        slider18,
        slider19,
        slider20,
    ],
    //Contacts
    contacts: {
        address: "2537 Post Rd Southport, CT 06890",
        email: "info@unictiles.com",
        phone1: "(203) 690-0552",
        phone2: "(203) 895-8258",
    },
    //free quote text box
    freeQuote: {
        header: "Request Your Free Quote from Tile Installation Specialists",
        text: "• Why Ordinary? Choose extraordinary craftsmanship.\n• Dreams to Reality: Stunning flooring and backsplashes.\n• Seamless: Full-service, from consult to install.\n• Quality: Durable designs for all spaces.\n• Start Now: Get a free quote today."
    },
    //Quote button
    quoteButton: {
        linkTo: "/getfreequote",
        linkBack: "/",
        // linkTo: "/UnicTilesPortfolio/getfreequote",
        // linkBack: "/UnicTilesPortfolio/",
    },
    //About Us
    aboutText: `At Unic Tiles, we pride ourselves on our exceptional tile installation services and the courtesy we extend to each client. We understand the transformative impact that well-installed tiles can have on your home or office space. From backsplashes to countertops, we're here to relieve you of the burden and elevate the look and feel of your space.

    Our seasoned team offers a wide array of tiling services, ranging from bathroom and kitchen remodels to repairs and specialty installations like stone tiling and backsplashes.
    
    Our mission is simple: To make your remodeling journey as smooth as possible by tailoring our services to meet your specific design and functional needs. With Unic Tiles, you're not just getting a contractor; you're investing in a committed partner. Choose Unic Tiles for a transformation that stands the test of time.
    
    In an industry where quality and customer satisfaction can vary widely, we stand out for our dedication to craftsmanship, timely service, and unwavering commitment to your satisfaction. Partnering with Unic Tiles means investing in a service where every detail counts, and where your vision becomes our mission.`,
    //Service cards
    cards: [
        {
            image: { bathroom },
            headerIcon: { iconBath },
            headerText: "BATHROOM",
            shortText: `Elevate your bathroom experience with Unic Tiles. We specialize in high-quality tiling that transforms your bathroom into a sanctuary. Book a consultation today!`,
            longText: `Transform your bathroom into a sanctuary of comfort and style with Unic Tiles. Our team of experts specializes in delivering high-quality tiling solutions that stand the test of time. From modern designs to classic elegance, we offer a wide range of options to suit your taste and budget. Experience the Unic Tiles difference today and elevate your bathroom experience.`,
        },
        {
            image: { repair_removal },
            headerIcon: { iconRepair_removal },
            headerText: "Repair & Removel",
            shortText: `Restore the beauty of your home with our tile repair and removal services. Get a free in-home estimate and let our experts handle the rest.`,
            longText: `Don't let tile damage ruin the look of your home. At Unic Tiles, we offer comprehensive repair and removal services that restore the beauty of your spaces. Our skilled technicians use state-of-the-art equipment to ensure a flawless finish. Schedule a free in-home estimate today and say goodbye to tile problems.`,
        },
        {
            image: { kitchen },
            headerIcon: { iconKitchen },
            headerText: "KITCHEN",
            shortText: `Make your kitchen the heart of your home with Unic Tiles. We offer customized tiling solutions that suit your style and budget. Explore your options now!`,
            longText: `The kitchen is the heart of your home, and it deserves the best. Unic Tiles brings you top-notch tiling solutions that combine functionality with aesthetics. Our experts work closely with you to understand your needs and deliver results that exceed your expectations. Choose from a variety of materials, patterns, and finishes to create a kitchen that reflects your style.`,
        },
        {
            image: { floor },
            headerIcon: { iconFloor },
            headerText: "FLOOR",
            shortText: `Step into a new world of flooring with Unic Tiles. Our durable and visually stunning floor tiles are a statement of style and comfort. Get started today!`,
            longText: `Flooring is more than just a surface to walk on; it's a statement of style and comfort. Unic Tiles offers a wide range of floor tiling options that are durable, easy to maintain, and visually stunning. Our team of professionals ensures seamless installation, transforming your floors into works of art. Step into a new world of flooring with Unic Tiles.`,
        },
        {
            image: { backsplash },
            headerIcon: { iconBacksplash },
            headerText: "Backsplash",
            shortText: `Enhance your space with our exquisite backsplash tiling. Protect your walls and add a touch of elegance. Schedule a consultation today!`,
            longText: `Add a touch of elegance to your kitchen or bathroom with our exquisite backsplash tiling options. Unic Tiles offers a variety of designs that not only protect your walls but also enhance the overall look of your space. Our experts handle everything from consultation to installation, ensuring you get the perfect backsplash that complements your style.`,
        },
        {
            image: { stone },
            headerIcon: { iconStone },
            headerText: "STONE",
            shortText: `Discover the timeless beauty of stone tiling with Unic Tiles. Ideal for indoor and outdoor spaces, our stone tiles offer unmatched durability and style. Contact us now!`,
            longText: `Experience the timeless beauty of stone tiling with Unic Tiles. Ideal for both indoor and outdoor applications, our stone tiles offer durability and aesthetic appeal. Whether it's a patio, a fireplace, or a kitchen countertop, our experts will guide you through the entire process, ensuring a result that meets your vision and stands the test of time.`,
        },
    ],

    message: {
        success: {
            title: "Success!",
            message:
                "Thank you for taking the time to send through the information!",
        },
        error: {
            title: "Oh No!",
            message: "Message was not delivered.",
        },
    },
};

export default storage;
