import "./assets/styles/App.css"
import "./assets/styles/global.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout"
import Page404 from "./pages/Page404"
import routes from "./routes"



function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement: <Page404 />,
			children: routes
		},
	])

	console.log("routes:", routes)

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
