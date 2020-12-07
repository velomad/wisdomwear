import { Navbar } from "./components";

function PublicLayout(props) {
	const { children } = props;
	return (
		<div>
			<div className="fixed w-full" style={{ zIndex: "99" }}>
				<Navbar />
			</div>

			<div className="pt-20">{children}</div>
		</div>
	);
}

export default PublicLayout;
