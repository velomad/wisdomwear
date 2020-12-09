import React from "react";

const AboutUsPage = () => {
	return (
		<div className="p-4 h-full md:h-screen" id="about-us">
			<section class="text-gray-700 body-font">
				<div class="container px-5 py-10 mx-auto">
					<div class="text-center mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
							About Us
						</h1>
						<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan
							taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
							mi pug.
						</p>
						<div class="flex mt-6 justify-center">
							<div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
						</div>
					</div>
					<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
								{/* <svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg> */}
								<img src="/static/images/onboarding.svg" />
							</div>
							<div class="flex-grow">
								<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
									Our Roots
								</h2>
								<p class="leading-relaxed text-base">
									Aarya Fashions is the leading name in manufacture and whole
									sale of textiles and garments. Wisdom wear is the subsidiary
									of Aarya Fashions.
								</p>
							</div>
						</div>
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
								{/* <svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg> */}
								<img src="/static/images/badge.svg" />
							</div>
							<div class="flex-grow">
								<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
									Where We Stand
								</h2>
								<p class="leading-relaxed text-base">
									At wisdom wear, we believe uniforms are lifestyle. Learning is
									an attitude and the school is the only place to create the
									better way of life. Uniforms have always been an important
									part of the school life but it was not as exciting before.
								</p>
							</div>
						</div>
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
								{/* <svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg> */}
								<img src="/static/images/target.svg" />
							</div>
							<div class="flex-grow">
								<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
									Our Vision
								</h2>
								<p class="leading-relaxed text-base">
									Today the uniforms are all about passion, comfort and
									attitude. Our team is passionate about offering an
									unparalleled designing experience to the clients with an
									attitude!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUsPage;
