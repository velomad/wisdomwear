import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleSection = () => {
		setTimeout(() => {
			setOpen(false);
		}, 400);
	};

	return (
		<React.Fragment>
			<div class="relative p-4 px-4 sm:px-6 lg:px-8 fixed bg-white">
				<nav
					class="relative flex items-center justify-between sm:h-10 lg:justify-around"
					aria-label="Global"
				>
					<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
						<div class="flex items-center justify-between w-full md:w-auto">
							<a href="#">
								<span class="sr-only">Workflow</span>
								<img
									class="h-8 w-auto sm:h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								/>
							</a>
							<div class="-mr-2 flex items-center md:hidden">
								<button
									onClick={() => setOpen(true)}
									type="button"
									class=" rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none"
									id="main-menu"
									aria-haspopup="true"
								>
									<span class="sr-only">Open main menu</span>
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							offset={-50}
							duration={400}
						>
							<span class="font-medium text-gray-500 hover:text-gray-900">
								Home
							</span>
						</Link>

						<Link
							activeClass="active"
							to="about-us"
							spy={true}
							smooth={true}
							offset={-50}
							duration={400}
						>
							<span
								href="#"
								class="font-medium text-gray-500 hover:text-gray-900"
							>
								About Us
							</span>
						</Link>

						<Link
							activeClass="active"
							to="fabrics"
							spy={true}
							smooth={true}
							offset={-50}
							duration={400}
						>
							<span
								href="#"
								class="font-medium text-gray-500 hover:text-gray-900"
							>
								Fabrics
							</span>
						</Link>

						<Link
							activeClass="active"
							to="our-products"
							spy={true}
							smooth={true}
							offset={-50}
							duration={400}
						>
							<span
								href="#"
								class="font-medium text-gray-500 hover:text-gray-900"
							>
								Our Products
							</span>
						</Link>

						<Link
							activeClass="active"
							to="contact-us"
							spy={true}
							smooth={true}
							offset={-50}
							duration={400}
						>
							<span
								href="#"
								class="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Contact Us
							</span>
						</Link>
					</div>

					{open && (
						<div
							className={`absolute top-0 z-50 w-full md:hidden ${
								open &&
								"transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							}`}
						>
							<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="px-5 pt-4 flex items-center justify-between">
									<div>
										<img
											class="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
											alt=""
										/>
									</div>
									<div class="-mr-2">
										<button
											onClick={() => setOpen(false)}
											type="button"
											class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										>
											<span class="sr-only">Close main menu</span>
											<svg
												class="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="main-menu"
								>
									<div class="px-2 pt-2 pb-3 space-y-1" role="none">
										<Link
											activeClass="active"
											onClick={handleSection}
											to="home"
											spy={true}
											smooth={true}
											offset={-70}
											duration={400}
											delay={300}
										>
											<span
												href="#"
												class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
												role="menuitem"
											>
												Home
											</span>
										</Link>

										<Link
											activeClass="active"
											onClick={handleSection}
											to="about-us"
											spy={true}
											smooth={true}
											offset={-70}
											duration={400}
											delay={300}
										>
											<span
												href="#"
												class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
												role="menuitem"
											>
												About us
											</span>
										</Link>

										<Link
											activeClass="active"
											onClick={handleSection}
											to="fabrics"
											spy={true}
											smooth={true}
											offset={-70}
											duration={400}
											delay={300}
										>
											<span
												href="#"
												class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
												role="menuitem"
											>
												Fabrics
											</span>
										</Link>

										<Link
											activeClass="active"
											onClick={handleSection}
											to="our-products"
											spy={true}
											smooth={true}
											offset={-70}
											duration={400}
											delay={300}
										>
											<span
												href="#"
												class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
												role="menuitem"
											>
												Our Products
											</span>
										</Link>
									</div>
									<div role="none">
										<Link
											activeClass="active"
											onClick={handleSection}
											to="contact-us"
											spy={true}
											smooth={true}
											offset={-70}
											duration={400}
											delay={300}
										>
											<span
												href="#"
												class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
												role="menuitem"
											>
												Contact Us
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
