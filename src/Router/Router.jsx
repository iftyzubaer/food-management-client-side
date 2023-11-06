import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddFood from "../Pages/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/available",
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/food')
            }
        ]
    }
])

export default router