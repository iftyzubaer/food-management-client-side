import Banner from "../Pages/Banner"
import AboutUs from "../Pages/AboutUs"
import Faq from "../Pages/Faq"
import FeaturedFood from "./FeaturedFood";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const foods = useLoaderData()

    return (
        <div className="px-2 md:px-20 lg:px-40">
            <Helmet>
                <title>Food Saver | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFood key={foods._id} foods={foods}></FeaturedFood>
            <AboutUs></AboutUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;