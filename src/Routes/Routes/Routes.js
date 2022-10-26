import Login from "../../Pages/Login";
import Profile from "../../Pages/Profile";
import Register from "../../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Blog } = require("../../Pages/Blog");
const { default: Courses } = require("../../Pages/Courses");
const { default: ErrorPage } = require("../../Pages/ErrorPage");
const { default: Faq } = require("../../Pages/Faq");
const { default: Home } = require("../../Pages/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses /></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])

export default router;