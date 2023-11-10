import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const ManageAddedFoods = () => {

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

    const userFoods = foods.filter((food) => food.donarEmail == userEmail)

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/food/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast("Food Deleted Successfully");
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added food has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });


    }

    return (
        <div className='text-center'>
            <h2 className="text-5xl font-bold text-center my-4">My Added Foods</h2>
            <div>
                <div className="min-w-full">
                    <table className="table table-lg text-center">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                                <th>Request Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userFoods.map(userFoods =>
                                    <tr key={userFoods._id}>
                                        <td>{userFoods.donarName}</td>
                                        <td>{userFoods.location}</td>
                                        <td>{userFoods.expiryDate}</td>
                                        <td>{userFoods.requestDate}</td>
                                        <td><Link to={`/update/${userFoods._id}`} className='btn'>Update</Link></td>
                                        <td><button onClick={() => handleDelete(userFoods._id)} className='btn'>Delete</button></td>
                                        <td><Link to={`/manageFood/${userFoods._id}`} className='btn'>Manage</Link></td>
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

export default ManageAddedFoods;