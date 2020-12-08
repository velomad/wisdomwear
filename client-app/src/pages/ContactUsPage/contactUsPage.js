import React from "react";

const ContactUs = () => {
	return (
		<div className="h-full md:h-screen" id="contact-us">
			<section class="text-gray-700 body-font relative">
				<div class="absolute inset-0 bg-gray-300 rounded-sm">
					<iframe
						width="100%"
						height="100%"
						id="gmap_canvas"
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=bhiwandi&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						style={{ filter: " contrast(1.0) opacity(0.5)" }}
					></iframe>
				</div>
				<div class="container px-5 py-24  mx-auto flex">
					<div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
						<h2 class="text-gray-900 text-lg  font-medium title-font">
							Contact Us
						</h2>
						<div className="py-4 space-y-6">
							<div className="flex space-x-6 items-center">
								<img src="/static/images/placeholder.svg" width="25" />
								<div>
									A1-14, Padmini Complex Pipe Line Road,Purna,Bhiwandi – 421 302
								</div>
							</div>
							<div className="flex space-x-6 items-center">
								<img src="/static/images/telephone.svg" width="25" />
								<div>
									<div>
									+91 93246 70097
									</div>
									<div>
									+91 9769255925
									</div>
								</div>
							</div>
							<div className="flex space-x-6 items-center">
								<img src="/static/images/gmail.svg" width="25" />
								<div> aaryafashions2012@gmail.com</div>
							</div>
						</div>
						<div class="relative mb-4">
							<label for="email" class="leading-7 text-sm text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="your Email"
								class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div class="relative mb-4">
							<label for="message" class="leading-7 text-sm text-gray-600">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							></textarea>
						</div>
						<button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							SEND
						</button>
						<p class="text-xs text-gray-500 mt-3">
							We'll shortly get back to you.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
