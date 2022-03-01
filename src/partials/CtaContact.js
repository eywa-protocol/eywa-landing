import React from "react";

function CtaContact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">Join EYWA</h1>
          </div>
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            <div
              className="max-w-6xl mx-auto px-4 sm:px-6"
              style={{ height: "100%" }}
            >
              {/* CTA box */}
              <div
                className="relative bg-gray-800 py-10 px-8 md:py-16 md:px-12"
                style={{ height: "100%" }}
              >
                {/* Background illustration */}
                <div
                  className="absolute inset-0 left-auto  pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full"
                    width="400"
                    height="232"
                    viewBox="0 0 400 232"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="50%"
                        cy="50%"
                        fx="50%"
                        fy="50%"
                        r="39.386%"
                        id="box-gr-a"
                      >
                        <stop stopColor="#667EEA" offset="0%" />
                        <stop
                          stopColor="#667EEA"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </radialGradient>
                      <radialGradient
                        cx="50%"
                        cy="50%"
                        fx="50%"
                        fy="50%"
                        r="39.386%"
                        id="box-gr-b"
                      >
                        <stop stopColor="#3ABAB4" offset="0%" />
                        <stop
                          stopColor="#3ABAB4"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </radialGradient>
                    </defs>
                    <g
                      transform="translate(-85 -369)"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <circle
                        fillOpacity=".16"
                        fill="url(#box-gr-a)"
                        cx="413"
                        cy="688"
                        r="240"
                      />
                      <circle
                        fillOpacity=".24"
                        fill="url(#box-gr-b)"
                        cx="400"
                        cy="400"
                        r="400"
                      />
                    </g>
                  </svg>
                </div>

                <div className="relative max-w-3xl mx-auto text-center">
                  {/* CTA header */}
                  <h3 className="h3 font-red-hat-display text-gray-100 mb-2">
                    Community
                  </h3>
                  <p className="text-gray-400 text-xl">
                    Learn more about EYWA, chat with the team, and become the
                    part of our growing community.
                  </p>

                  {/* CTA button */}
                  <div className="flex justify-center mt-8">
                    <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
                      <li>
                        <a
                          className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Twitter"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a
                          className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Github"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a
                          className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a
                          className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Instagram"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20.145" cy="11.892" r="1" />
                            <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                            <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a
                          className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Linkedin"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {/* CTA box */}
              <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">
                {/* Background illustration */}
                <div
                  className="absolute inset-0 left-auto  pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full"
                    width="400"
                    height="232"
                    viewBox="0 0 400 232"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="50%"
                        cy="50%"
                        fx="50%"
                        fy="50%"
                        r="39.386%"
                        id="box-gr-a"
                      >
                        <stop stopColor="#667EEA" offset="0%" />
                        <stop
                          stopColor="#667EEA"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </radialGradient>
                      <radialGradient
                        cx="50%"
                        cy="50%"
                        fx="50%"
                        fy="50%"
                        r="39.386%"
                        id="box-gr-b"
                      >
                        <stop stopColor="#3ABAB4" offset="0%" />
                        <stop
                          stopColor="#3ABAB4"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </radialGradient>
                    </defs>
                    <g
                      transform="translate(-85 -369)"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <circle
                        fillOpacity=".16"
                        fill="url(#box-gr-a)"
                        cx="413"
                        cy="688"
                        r="240"
                      />
                      <circle
                        fillOpacity=".24"
                        fill="url(#box-gr-b)"
                        cx="400"
                        cy="400"
                        r="400"
                      />
                    </g>
                  </svg>
                </div>

                <div className="relative max-w-3xl mx-auto text-center">
                  {/* CTA header */}
                  <h3 className="h3 font-red-hat-display text-gray-100 mb-2">
                    EYWA alpha testing challenge
                  </h3>
                  <p className="text-gray-400 text-xl">
                    Take part in EYWA alpha test, complete simple tasks, earn
                    points and get unique NFTs.
                  </p>

                  {/* CTA button */}
                  <div className="flex justify-center mt-8">
                    <a
                      className="btn text-white bg-teal-500 hover:bg-teal-400"
                      href="#0"
                    >
                      Join alpha testing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaContact;
