import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router