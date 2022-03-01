import React from "react";
import { ReactComponent as JoinIcon } from "../images/join.svg";
import { ReactComponent as BuildIcon } from "../images/build.svg";
import { ReactComponent as TransferIcon } from "../images/transfer.svg";
function RelatedLinks() {
  return (
    <section className="relative border-t border-gray-200 dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      />
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">
              Build your own interoperable DApps
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              EYWA is a cross-chain ecosystem that implements philosophy of
              decentralization, security and equal opportunities to all.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-xs sm:max-w-none mx-auto md:max-w-none lg:max-w-none grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3"
            data-aos-id-rellinks
          >
            {/* 1st item */}
            <div
              className="flex flex-col items-center text-center p-5 text-white group bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-rellinks]"
            >
              <BuildIcon />
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                Build DApps with fast cross-chain integration
              </div>
            </div>

            {/* 2nd item */}
            <div
              className="flex flex-col items-center text-center p-5 text-white group bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-rellinks]"
              data-aos-delay="150"
            >
              <TransferIcon />
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                Transfer tokens between blockchains with EYWA Cross-chain Bridge
              </div>
            </div>

            {/* 3rd item */}
            <div
              className="flex flex-col items-center text-center p-5 text-white group bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 shadow-2xl sm:col-span-2 md:col-auto"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-rellinks]"
              data-aos-delay="300"
            >
              <JoinIcon />
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                Join EYWA Relayer’s Network to increase decentralization and
                security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedLinks;
