import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import 'firebase/auth';
import auth from "../Firebase/firebase.config";

const FoodDetailsPage = () => {

    const [food, setFood] = useState({})
    const [userEmail, setUserEmail] = useState(null);
    const { _id } = useParams()
    const foods = useLoaderData()

    useEffect(() => {
        const findFood = foods.find(food => food._id == _id)
        setFood(findFood)
    }, [_id, foods])


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
    }, []);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

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
                <button className="btn btn-md lg:btn-lg" onClick={() => document.getElementById('my_modal_4').showModal()}>Request</button>
                <dialog id="my_modal_4" className="modal text-left">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div>
                            <div className="">
                                <div className=" flex-col">
                                    <div className="w-full shadow-2xl bg-base-100 p-6">
                                        <form className="">
                                            <div className="text-center">
                                                <h1 className="text-5xl font-bold">Request for Food</h1>
                                            </div>
                                            <p className='mb-3'>Must fill up the <span className='text-red-600'>*</span> signed boxes</p>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="text" name="name" disabled defaultValue={food.name} placeholder="Food's Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Image<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="url" name="photo" disabled defaultValue={food.photo} placeholder="Food's Image URL" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Id<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="text" name="id" disabled defaultValue={food._id} placeholder="Food's Id" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Donar&apos;s Email<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="email" name="donarEmail" disabled defaultValue={food.donarEmail} placeholder="Donar's Email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Donar&apos;s Name<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="text" name="donarName" disabled defaultValue={food.donarName} placeholder="Donar's Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Requesting User&apos;s Email<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="email" name="userEmail" disabled defaultValue={userEmail} placeholder="Donar's Email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Request Date<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="date" name="requestDate" disabled value={formattedDate} placeholder="Food's Request Date" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Location<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="text" name="location" disabled defaultValue={food.location} placeholder="Donar's Location" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Expired Date<span className='text-red-600'>*</span></span>
                                                    </label>
                                                    <input type="date" name="expiryDate" disabled defaultValue={food.expiryDate} placeholder="Food's Expiry Date" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Additional Notes</span>
                                                    </label>
                                                    <textarea type="text" name="details" placeholder="food's Description" className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Donation Money</span>
                                                    </label>
                                                    <input type="number" name="donationMoney" placeholder="Donation Money" className="input input-bordered" />
                                                </div>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary">Add Food</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default FoodDetailsPage;