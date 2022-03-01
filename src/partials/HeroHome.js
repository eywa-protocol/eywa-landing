import React from "react";
import TestimonialsCircles from "./TestimonialsCircles";

function HeroHome() {
  return (
    <section style={{ minHeight: "100vh" }}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-10 md:pt-48 md:pb-16">
          {/* Hero content */}
          <div className="items-center md:grid md:grid-cols-12 md:gap-12 lg:gap-20">
            {/* Content */}
            <div className="mb-8 text-center md:col-span-7 lg:col-span-7 md:mb-0 md:text-left">
              <h1
                className="mb-4 font-extrabold h1 lg:text-4xl font-red-hat-display"
                data-aos="fade-down"
              >
                EYWA CROSS-CHAIN ECOSYSTEM
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                powered by EYWA Data Protocol
              </p>
              {/* CTA form */}
              <div className="flex flex-row max-w-sm mx-auto sm:flex-row sm:max-w-md md:mx-0 mt-8">
                <a
                  className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full mr-8"
                  href="#0"
                >
                  Join community
                </a>
                <a
                  className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full"
                  href="#0"
                >
                  Docs
                </a>
              </div>
              {/* Success message */}
              {/* <p className="mt-2 text-sm text-center opacity-75 md:text-left">Thanks for subscribing!</p> */}
              <ul
                className="max-w-sm mx-auto mt-8 -mb-2 text-gray-600 sm:max-w-md md:max-w-none dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Build DApps with fast cross-chain integration</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Transfer tokens between blockchains with EYWA Cross-chain
                    Bridge
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Join EYWA Relayer’s Network to increase decentralization and
                    security
                  </span>
                </li>
              </ul>
            </div>

            {/* Mobile mockup */}
            <div
              className="text-center md:col-span-5 lg:col-span-5 md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <TestimonialsCircles />
              {/*<div className="relative inline-flex items-center justify-center">*/}
              {/*  /!* Glow illustration *!/*/}
              {/*  <svg*/}
              {/*    className="absolute mt-32 mr-12 pointer-events-none -z-1 dark:opacity-40"*/}
              {/*    aria-hidden="true"*/}
              {/*    width="678"*/}
              {/*    height="634"*/}
              {/*    viewBox="0 0 678 634"*/}
              {/*    fill="none"*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*  >*/}
              {/*    <circle*/}
              {/*      cx="240"*/}
              {/*      cy="394"*/}
              {/*      r="240"*/}
              {/*      fill="url(#piphoneill_paint0_radial)"*/}
              {/*      fillOpacity=".4"*/}
              {/*    />*/}
              {/*    <circle*/}
              {/*      cx="438"*/}
              {/*      cy="240"*/}
              {/*      r="240"*/}
              {/*      fill="url(#piphoneill_paint1_radial)"*/}
              {/*      fillOpacity=".6"*/}
              {/*    />*/}
              {/*    <defs>*/}
              {/*      <radialGradient*/}
              {/*        id="piphoneill_paint0_radial"*/}
              {/*        cx="0"*/}
              {/*        cy="0"*/}
              {/*        r="1"*/}
              {/*        gradientUnits="userSpaceOnUse"*/}
              {/*        gradientTransform="rotate(90 -77 317) scale(189.054)"*/}
              {/*      >*/}
              {/*        <stop stopColor="#667EEA" />*/}
              {/*        <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />*/}
              {/*      </radialGradient>*/}
              {/*      <radialGradient*/}
              {/*        id="piphoneill_paint1_radial"*/}
              {/*        cx="0"*/}
              {/*        cy="0"*/}
              {/*        r="1"*/}
              {/*        gradientUnits="userSpaceOnUse"*/}
              {/*        gradientTransform="rotate(90 99 339) scale(189.054)"*/}
              {/*      >*/}
              {/*        <stop stopColor="#9F7AEA" />*/}
              {/*        <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />*/}
              {/*      </radialGradient>*/}
              {/*    </defs>*/}
              {/*  </svg>*/}
              {/*  /!* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) *!/*/}
              {/*  <img*/}
              {/*    className="relative h-auto max-w-full mx-auto pointer-events-none md:mr-0 md:max-w-none"*/}
              {/*    src={require("../images/network-group.png").default}*/}
              {/*    width="344"*/}
              {/*    height="674"*/}
              {/*    alt="iPhone mockup"*/}
              {/*    aria-hidden="true"*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
