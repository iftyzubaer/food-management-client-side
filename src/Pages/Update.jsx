import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {

    const foods = useLoaderData()
    const navigate = useNavigate()

    const handleUpdateFood = e => {
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
        const donarEmail = form.donarEmail.value

        const updateFood = { photo, name, quantity, location, expiryDate, details, donarName, donarPhoto, donarEmail }

        fetch(`https://food-management-server.vercel.app/food/${foods._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Food Updated Successfully");
                navigate('/')
            })
    }

    return (
        <div>
            <Helmet>
                <title>Food Saver | Update Food</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateFood} className="card-body">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Update a Food</h1>
                            </div>
                            <p className='mb-3'>Must fill up the <span className='text-red-600'>*</span> signed boxes</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="name" defaultValue={foods.name} placeholder="Food's Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="url" name="photo" defaultValue={foods.photo} placeholder="Food's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="number" name="quantity" defaultValue={foods.quantity} placeholder="no. of person to be served" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="location" defaultValue={foods.location} placeholder="Donar's Location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expired Date<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="date" name="expiryDate" defaultValue={foods.expiryDate} placeholder="Food's Expiry Date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Additional Notes</span>
                                    </label>
                                    <textarea type="text" name="details" defaultValue={foods.details} placeholder="food's Description" className="input input-bordered" />
                                </div>
                            </div>
                            <p className='mb-3 text-center text-lg'>Donar&apos;s Details</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" name="donarName" defaultValue={foods.donarName} placeholder="Donar's Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="url" name="donarPhoto" defaultValue={foods.donarPhoto} placeholder="Donar's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="email" name="donarEmail" defaultValue={foods.donarEmail} placeholder="Donar's Email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Update;