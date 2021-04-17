import React from "react";

const Fabrics = () => {
  return (
    <div className="p-4 h-full md:h-screen" id="fabrics">
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full shadow-xl rounded-lg overflow-hidden">
                <div
                  class="h-48 h-36 relative w-full object-center"
                  style={{
                    background: `url(http://wisdomwear.in/images/suitings.jpg)`,
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <div className="text-gray-100 text-2xl weight-600 absolute p-4 bottom-0">
                      Woven Suitings
                    </div>
                  </div>
                </div>

                <div class="p-6 space-y-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    Suitings
                  </h2>

                  <p class="leading-relaxed mb-3 text-gray-500">
                    Suiting is a woven fabric that can be made with a wide
                    variety of contents including wool, cotton, rayon, silk and
                    polyester. Lycra or Spandex can be mixed with the other
                    fibers to make the suiting stretch. This feature allows for
                    more comfort and ease of wearing
                  </p>
                  {/* <div class="flex items-center flex-wrap ">
										<a class="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
											Learn More
											<svg
												class="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
												<circle cx="12" cy="12" r="3"></circle>
											</svg>
											1.2K
										</span>
										<span class="text-gray-600 inline-flex items-center leading-none text-sm">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
											6
										</span>
									</div> */}
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full shadow-xl rounded-lg overflow-hidden">
                <div
                  class="h-48 h-36 relative w-full object-center"
                  style={{
                    background: `url(/static/images/knit.jpg)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "round",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="text-gray-100 text-2xl weight-600 absolute p-4 bottom-0">
                      Knits
                    </div>
                  </div>
                </div>
                <div class="p-6 space-y-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    Knits
                  </h2>

                  <p class="leading-relaxed mb-3 text-gray-500 ">
                    Knitted fabric is a textile that results from knitting, the
                    process of inter-looping of yarns or inter-meshing of loops.
                    Its properties are distinct from woven fabric in that it is
                    more flexible and can be more readily constructed into
                    smaller pieces, making it ideal for socks and hats.
                  </p>
                  {/* <div class="flex items-center flex-wrap">
										<a class="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
											Learn More
											<svg
												class="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
												<circle cx="12" cy="12" r="3"></circle>
											</svg>
											1.2K
										</span>
										<span class="text-gray-600 inline-flex items-center leading-none text-sm">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
											6
										</span>
									</div> */}
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full shadow-xl rounded-lg overflow-hidden">
                <div
                  class="h-48 h-36 relative w-full object-center"
                  style={{
                    background: `url(/static/images/shi.jpg)`,
                    backgroundSize: "contain",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <div className="text-gray-100 text-2xl weight-600 absolute p-4 bottom-0">
                      Woven Shirting
                    </div>
                  </div>
                </div>
                <div class="p-6 space-y-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    Shirting
                  </h2>

                  <p class="leading-relaxed mb-3 text-gray-500">
                    Shirting fabric is a kind of primarily cotton or cotton
                    blend cloth used to make shirts. These fabrics should be
                    breathable, durable, pleasant to the touch, and comfortable
                    to wear all year round. That is why high thread count and
                    yarn dyed structure are the essential features of shirting
                    fabrics.
                  </p>
                  {/* {/* <div class="flex items-center flex-wrap ">
										<a class="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
											Learn More
											<svg
												class="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
												<circle cx="12" cy="12" r="3"></circle>
											</svg>
											1.2K
										</span>
										<span class="text-gray-600 inline-flex items-center leading-none text-sm">
											<svg
												class="w-4 h-4 mr-1"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
											6
										</span>
									</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fabrics;
