import React from "react";

const OurProducts = () => {
	const n = [
		{ image: "/static/images/jacket.svg", name: "Jacket" },
		{ image: "/static/images/bagpack.svg", name: "Bagpack" },
		{ image: "/static/images/baseball-cap.svg", name: "cap" },
		{ image: "/static/images/belt.svg", name: "belt" },
		{ image: "/static/images/polo-shirt.svg", name: "T-shirt" },
		{ image: "/static/images/pants.svg", name: "pants" },
		{ image: "/static/images/skirt.svg", name: "skirt" },
		{ image: "/static/images/socks.svg", name: "socks" },
		{ image: "/static/images/sweater.svg", name: "sweater" },
		{ image: "/static/images/tie.svg", name: "tie" },
		{ image: "/static/images/tracksuit.svg", name: "tracksuit" },
		{ image: "/static/images/skirts.svg", name: "Skort" },
	];

	return (
		<div className=" h-full md:h-screen" id="our-products">
			<div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-8 md:gap-14">
				{n.map((el) => (
					<React.Fragment>
						<div className="transition duration-500 ease-in-out hover:bg-blue-100 transform hover:-translate-y-1 hover:scale-110 flex flex-col space-y-2 rounded-lg place-self-center p-4">
							<img src={el.image} width="80" />
							<div className="font-mono tracking-widest text-gray-500 text-lg font-bold text-center">
								{el.name}
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default OurProducts;
