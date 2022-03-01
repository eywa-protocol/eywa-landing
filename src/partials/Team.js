import React from "react";

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Team</h2>
            {/*<p className="text-xl text-gray-600 dark:text-gray-400">*/}
            {/*  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui*/}
            {/*  officia deserunt mollit anim id est.*/}
            {/*</p>*/}
          </div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div
              className="flex flex-wrap justify-center -m-5 lg:-my-7"
              data-aos-id-team
            >
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-01.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Sergey Filkov
                  </h4>
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
                </div>
              </div>

              {/* 2nd member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-02.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 02"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Mary Champ
                  </h4>
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
                </div>
              </div>

              {/* 3rd member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-03.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 03"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Mark Varsano
                  </h4>
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
                </div>
              </div>

              {/* 4th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-04.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 04"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    George Hurley
                  </h4>
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
                </div>
              </div>

              {/* 5th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-05.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 05"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Ellie Lepisov
                  </h4>
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
                </div>
              </div>

              {/* 6th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-06.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 06"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Connor Bal
                  </h4>
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
                </div>
              </div>

              {/* 7th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-07.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 07"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Marko Sharma
                  </h4>
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
                </div>
              </div>

              {/* 8th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="700"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-08.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 08"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Mick Esposito
                  </h4>
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
                </div>
              </div>

              {/* 9th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-09.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 09"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Daniel Smith
                  </h4>
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
                </div>
              </div>

              {/* 10th member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-delay="700"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={require("../images/team-member-10.jpg").default}
                    width="80"
                    height="80"
                    alt="Team member 10"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Patricia Long
                  </h4>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
