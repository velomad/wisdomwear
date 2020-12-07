import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout } from "./layouts";
import { AboutUsPage, HomePage } from "./pages";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<WithLayoutRoute
					exact
					path="/"
					layout={PublicLayout}
					component={HomePage}
				/>
				<Route path="*" component={() => "404 NOT FOUND"} />
			</Switch>
			
		</Router>
	);
};

export default Routes;
