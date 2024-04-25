
import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					{children ?? <Outlet />}
				</Suspense>
			</main>
			<Footer />
		</>
	);
}

export default Layout;