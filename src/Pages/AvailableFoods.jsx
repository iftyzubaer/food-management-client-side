import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";

const AvailableFoods = () => {

    const foods = useLoaderData()

    return (
        <div className="px-2 md:px-20 lg:px-40 my-16">
            <h2 className="text-5xl font-bold text-center my-4">Available Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foods.map(foods => <AvailableFoodsCard key={foods._id} foods={foods}></AvailableFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;