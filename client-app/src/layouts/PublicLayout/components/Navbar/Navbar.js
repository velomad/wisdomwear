import React, { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<React.Fragment>
			<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
				<nav
					class="relative flex items-center justify-between sm:h-10 lg:justify-start"
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
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
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
						<a href="#" class="font-medium text-gray-500 hover:text-gray-900">
							Home
						</a>

						<a href="#" class="font-medium text-gray-500 hover:text-gray-900">
							About Us
						</a>

						<a href="#" class="font-medium text-gray-500 hover:text-gray-900">
							Fabrics
						</a>

						<a href="#" class="font-medium text-gray-500 hover:text-gray-900">
							Our Products
						</a>

						<a
							href="#"
							class="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Contact Us
						</a>
					</div>
					{open && (
						<div class="absolute top-0 z-30 inset-x-0 w-full transition transform origin-top-right md:hidden">
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
										<a
											href="#"
											class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
											role="menuitem"
										>
											Product
										</a>

										<a
											href="#"
											class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
											role="menuitem"
										>
											Features
										</a>

										<a
											href="#"
											class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
											role="menuitem"
										>
											Marketplace
										</a>

										<a
											href="#"
											class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
											role="menuitem"
										>
											Company
										</a>
									</div>
									<div role="none">
										<a
											href="#"
											class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
											role="menuitem"
										>
											Loginn in
										</a>
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
