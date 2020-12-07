import { Navbar } from "./components";

function PublicLayout(props) {
	const { children, withFooter = false } = props;
	return (
		<div>
			<div className="fixed w-full">
				<Navbar />
			</div>

			<div className="pt-20">{children}</div>
			{/* <div>{withFooter && <Footer />}</div> */}
		</div>
	);
}

export default PublicLayout;
