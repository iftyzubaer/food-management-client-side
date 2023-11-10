import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestFood = () => {

    const foods = useLoaderData()
    const [userEmail, setUserEmail] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
    }, []);

    const requestedFoods = foods.filter((food) => food.userEmail == userEmail)

    const handleCancelRequest = id => {
        fetch(`http://localhost:5000/request/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast("Request Canceled Successfully");
                }
            })
    }

    return (
        <div className='text-center'>
            <h2 className="text-5xl font-bold text-center my-4">My Requested Foods</h2>
            <div>
                <div className="min-w-full">
                    <table className="table table-lg text-center">
                        <thead>
                            <tr>
                                <th>Donar Name</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                                <th>Request Date</th>
                                <th>Donation Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                requestedFoods.map(requestedFoods =>
                                    <tr key={requestedFoods._id}>
                                        <td>{requestedFoods.donarName}</td>
                                        <td>{requestedFoods.location}</td>
                                        <td>{requestedFoods.expiryDate}</td>
                                        <td>{requestedFoods.requestDate}</td>
                                        <td>{requestedFoods.donationMoney}</td>
                                        <td>{requestedFoods.status}</td>
                                        <td><button onClick={() => handleCancelRequest(requestedFoods._id)} className='btn'>Cancel Request</button></td>)
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RequestFood;