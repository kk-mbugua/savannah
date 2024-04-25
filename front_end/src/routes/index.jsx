import React from "react"
import PathConstants from "./pathsConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Cart = React.lazy(() => import("../pages/Cart"))
const Details = React.lazy(() => import("../pages/Details"))
const Contact = React.lazy(() => import("../pages/Contact"))
const About = React.lazy(() => import("../pages/About"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.HOME, element: <Cart /> },
    { path: PathConstants.HOME, element: <Details /> },
    { path: PathConstants.HOME, element: <Contact /> },
    { path: PathConstants.ABOUT, element: <About /> },
]

export default routes