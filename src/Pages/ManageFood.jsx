import { useLoaderData } from "react-router-dom";

const ManageFood = () => {

    const foods = useLoaderData()

    return (
        <div>
            <h2>Requester Name:</h2> 
            <h2>Requester Image:</h2>
            <h2>Requester Email: {foods.userEmail}</h2>
            <h2>Request Date: {foods.requestDate}</h2>
            <button className="btn">Delivered</button>
        </div>
    );
};

export default ManageFood;