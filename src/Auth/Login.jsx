import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("Logged In Successfully!");
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                if(error.code === 'auth/user-not-found') {
                    toast("email doesn't match")
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast("Logged In Successfully!");
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero px-4 py-20 md:px-24">
            <Helmet>
                <title>Food Saver | Login</title>
            </Helmet>
            <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome back to FoodSaver! Please log in to your account to access our food waste reduction and management platform. Join us in making a positive impact on the environment while saving money on your groceries.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">New Here?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost mt-3">Google</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;