import {
    createBrowserRouter,
} from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <Loginpage />
    }, {
        path: "/register",
        element: <Signup />
    }
]);

export default routes