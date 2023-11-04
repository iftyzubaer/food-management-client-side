const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(banner.jpg)', backgroundSize: 'cover'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Food Saver</h1>
                        <p className="mb-5">Welcome to FoodSaver - Your Partner in Sustainable Eating! Take control of your food waste and save the planet one meal at a time. Join us in the mission to reduce waste and enjoy the benefits of a more sustainable and economical lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;