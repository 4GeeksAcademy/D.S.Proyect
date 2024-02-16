import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { States } from "./views/States.jsx";
import { StateDetails } from "./views/StateDetails.jsx";
import { Single } from "./views/single";
import { Countries } from "./views/Countries.jsx";
import { Country } from "./views/Country.jsx";
import { Subregion } from "./views/Subregion.jsx";
import injectContext from "./store/appContext";

import { MyNavbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ChakraProvider>
					<ScrollToTop>
						<MyNavbar />
						<Routes>
							<Route path="/region/:subregion" element={<Subregion/>}></Route>
							<Route path="/countries" element={<Countries />}></Route>
							<Route path="/countries/:country" element={<Country />}></Route>
							<Route path="/states" element={<States />} />
							<Route path="/states/:stateName" element={<StateDetails />} ></Route>
							<Route path="/" element={<Home />} />
							<Route path="/demo" element={<Demo />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</ChakraProvider>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
