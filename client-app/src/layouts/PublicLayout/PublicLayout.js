import { Navbar } from "./components";

function PublicLayout(props) {
	const { children, withFooter = false } = props;
	return (
		<div>
			<Navbar />

			<div className="p-0">{children}</div>
			{/* <div>{withFooter && <Footer />}</div> */}
		</div>
	);
}

export default PublicLayout;
