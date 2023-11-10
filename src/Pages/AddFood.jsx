import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Firebase/firebase.config';
import { Helmet } from 'react-helmet-async';

const AddFood = () => {

    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
    }, []);

    const handleAddFood = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const quantity = form.quantity.value
        const location = form.location.value
        const expiryDate = form.expiryDate.value
        const details = form.details.value
        const donarName = form.donarName.value
        const donarPhoto = form.donarPhoto.value
        const donarEmail = userEmail

        const newFood = { photo, name, quantity, location, expiryDate, details, donarName, donarPhoto, donarEmail }

        fetch('https://food-management-server.vercel.app/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Food Added Successfully");
                e.target.reset()
            })
    }

    return (
        <div>
            <Helmet>
                <title>Food Saver | Add Food</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddFood} className="card-body">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Add a Food</h1>
                            </div>
                            <p className='mb-3'>Must fill up the <span className='text-red-600'>*</span> signed boxes</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="name" placeholder="Food's Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Food's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="no. of person to be served" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="location" placeholder="Donar's Location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expired Date<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="date" name="expiryDate" placeholder="Food's Expiry Date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Additional Notes</span>
                                    </label>
                                    <textarea type="text" name="details" placeholder="food's Description" className="input input-bordered" />
                                </div>
                            </div>
                            <p className='mb-3 text-center text-lg'>Donar&apos;s Details</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="donarName" placeholder="Donar's Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="url" name="donarPhoto" placeholder="Donar's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="email" name="donarEmail" disabled defaultValue={userEmail} placeholder="Donar's Email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddFood;