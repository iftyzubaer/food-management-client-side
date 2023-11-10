import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddFood from "../Pages/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import FoodDetailsPage from "../Pages/FoodDetailsPage";
import ManageAddedFoods from "../Pages/ManageAddedFoods";
import RequestFood from "../Pages/RequestFood";
import Update from "../Pages/Update";
import ManageFood from "../Pages/ManageFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://food-management-server.vercel.app/food')
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
                loader: () => fetch('https://food-management-server.vercel.app/food')
            },
            {
                path: "/food/:_id",
                element: <FoodDetailsPage></FoodDetailsPage>,
                loader: () => fetch('https://food-management-server.vercel.app/food')
            },
            {
                path: "/manage",
                element: <PrivateRoute><ManageAddedFoods></ManageAddedFoods></PrivateRoute>,
                loader: () => fetch('https://food-management-server.vercel.app/food')
            },
            {
                path: "/request",
                element: <PrivateRoute><RequestFood></RequestFood></PrivateRoute>,
                loader: () => fetch('https://food-management-server.vercel.app/request')
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-management-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/manageFood/:id",
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-management-server.vercel.app/food/${params.id}`)
            }
        ]
    }
])

export default router