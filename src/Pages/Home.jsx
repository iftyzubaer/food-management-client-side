import Banner from "../Pages/Banner"
import AboutUs from "../Pages/AboutUs"

const Home = () => {
    return (
        <div className="px-2 md:px-20 lg:px-40">
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;