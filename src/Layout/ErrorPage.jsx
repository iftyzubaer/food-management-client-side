import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h2 className="text-7xl">404 Page not Found</h2>
            <p className="text-2xl pt-5">Recheck the address you want to access!</p>
            <Link to="/" className="btn mt-6">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;