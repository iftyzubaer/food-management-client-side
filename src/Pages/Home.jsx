import Banner from "../Pages/Banner"
import AboutUs from "../Pages/AboutUs"
import Faq from "../Pages/Faq"
import FeaturedFood from "./FeaturedFood";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const foods = useLoaderData()

    return (
        <div className="px-2 md:px-20 lg:px-40">
            <Banner></Banner>
            <FeaturedFood key={foods._id} foods={foods}></FeaturedFood>
            <AboutUs></AboutUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;