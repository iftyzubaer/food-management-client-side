import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router