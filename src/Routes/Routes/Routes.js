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
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])

export default router;