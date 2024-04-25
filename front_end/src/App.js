import "./assets/styles/App.css"
import "./assets/styles/global.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Page404 from "./pages/Page404"
import Layout from "./components/Layout";

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement: <Page404 />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/contact",
					element: <Contact />
				},
				{
					path: "/about",
					element: <About />,
				},
			],
		},
	])

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
