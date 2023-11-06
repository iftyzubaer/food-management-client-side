import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FoodDetailsPage = () => {

    const [food, setFood] = useState({})
    const { _id } = useParams()
    const foods = useLoaderData()

    useEffect(() => {
        const findFood = foods.find(food => food._id == _id)
        setFood(findFood)
    }, [_id, foods])

    return (
        <div className="mx-6 md:mx-32 lg:mx-40 my-16">
            <img className="m-auto" src={food.photo} alt="" />
            <h3 className="text-xl font-bold mb-4">Donar:</h3>
            <div className="flex items-center gap-1">
                <div className="avatar">
                    <div className="w-6 md:w-10 rounded-full">
                        <img src={food.donarPhoto} />
                    </div>
                </div>
                <span className="text-sm md:text-lg">{food.donarName}</span>
            </div>
            <h2 className="text-4xl font-bold py-6">{food.name}</h2>
            <p className="font-semibold pt-4 text-lg">Quantity: {food.quantity}</p>
            <p className="font-semibold pt-4 text-lg">Expiry Date: {food.expiryDate}</p>
            <div className="mb-6 text-center">
                <button className="btn btn-md lg:btn-lg">Add to Cart</button>
            </div>
        </div>
    );
};

export default FoodDetailsPage;