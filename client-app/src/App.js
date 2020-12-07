import React from "react";
import {
	AboutUsPage,
	FabricsPage,
	ContactUsPage,
	OurProductsPage,
} from "./pages";
import Routes from "./Routes";

function App() {
	return (
		<div
		// style={{
		// 	background: `url(/static/images/cover.jpg)`,
		// 	backgroundRepeat: "no-repeat",
		// 	backgroundSize: "cover",
		// }}
		// className="h-screen"
		>
			<Routes />
			<div>
				<AboutUsPage />
				<FabricsPage />
				<OurProductsPage />
				<ContactUsPage />
			</div>
		</div>
	);
}

export default App;
