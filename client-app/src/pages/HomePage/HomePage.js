import React from "react";
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div
      className="h-screen"
      id="home"
      style={{
        background: `url(http://wisdomwear.in/images/bravo2.png)`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          height: "100%",
        }}
        className="md:grid place-items-center pb-40"
      >
        <div className=" text-center pt-8 space-y-2">
          <div className="text-4xl font-bold">
            Wisdom<span className="text-indigo-600">Wear</span>
          </div>
          <div className="text-gray-600">
            See the difference we make to your school..
          </div>
        </div>

        <div className="hidden md:block flex justify-center">
          <Link
            activeClass="active"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-50}
            duration={400}
          >
            <button className=" focus:outline-none border-2 border-indigo-500 p-2 rounded-lg text-indigo-600 font-bold">
              Connect Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
