import React, { useState } from "react";

function TestimonialsCircles() {
  const [commentOn, setCommentOn] = useState(false);
  const [active, setActive] = useState(0);
  const [items] = useState([
    {
      // user-1.jpg
      size: "48", // image width / height
      style: { maxWidth: "7.08%", top: "29%", left: "2%" }, // image absolute  positioning
      name: "Algorand",
      icon: "algorand-algo-logo.svg",
    },
    {
      // user-2.jpg
      size: "36",
      style: { maxWidth: "5.31%", top: "60%", left: "2%" },
      name: "Avalanche",
      icon: "avalanche-avax-logo.svg",
    },
    {
      // user-3.jpg
      size: "72",
      style: { maxWidth: "10.62%", top: "43%", left: "13%" },
      name: "BNB Chain",
      icon: "bnb-bnb-logo.svg",
    },
    {
      // user-4.jpg
      size: "56",
      style: { maxWidth: "8.26%", top: "75%", left: "14%" },
      name: "Cardano",
      icon: "cardano-ada-logo.svg",
    },
    {
      // user-5.jpg
      size: "64",
      style: { maxWidth: "9.44%", top: "11%", left: "15%" },
      name: "Ethereum",
      icon: "ethereum-eth-logo.svg",
    },
    {
      // user-6.jpg
      size: "80",
      style: { maxWidth: "11.8%", top: "32%", left: "30%" },
      name: "Fantom",
      icon: "fantom-ftm-logo.svg",
    },
    {
      // user-7.jpg
      size: "50",
      style: { maxWidth: "7.37%", top: "65%", left: "30%" },
      name: "Harmony One",
      icon: "harmony-one-logo.svg",
    },
    {
      // user-8.jpg
      size: "36",
      style: { maxWidth: "5.31%", top: "6%", left: "33%" },
      name: "Near Protocol",
      icon: "near-protocol-near-logo.svg",
    },
    {
      // user-9.jpg
      size: "44",
      style: { maxWidth: "6.49%", top: "77%", left: "44%" },
      name: "Polygon",
      icon: "polygon-matic-logo.svg",
    },
    {
      // user-10.jpg
      size: "64",
      style: { maxWidth: "9.44%", top: "48%", left: "46%" },
      name: "Solana",
      icon: "solana-sol-logo.svg",
    },
    {
      // user-11.jpg
      size: "72",
      style: { maxWidth: "10.62%", top: "16%", left: "46%" },
      name: "XDai",
      icon: "xdai-stake-logo.svg",
    },
    {
      // user-12.jpg
      size: "64",
      style: { maxWidth: "9.44%", top: "65%", left: "58%" },
      name: "Algorand",
      icon: "algorand-algo-logo.svg",
    },
    {
      // user-13.jpg
      size: "80",
      style: { maxWidth: "11.8%", top: "32%", left: "62%" },
      name: "Avalanche",
      icon: "avalanche-avax-logo.svg",
    },
    {
      // user-14.jpg
      size: "48",
      style: { maxWidth: "7.08%", top: "6%", left: "63%" },
      name: "BNB Chain",
      icon: "bnb-bnb-logo.svg",
    },
    {
      // user-15.jpg
      size: "24",
      style: { maxWidth: "3.54%", top: "93%", left: "65%" },
      name: "Cardano",
      icon: "cardano-ada-logo.svg",
    },
    {
      // user-16.jpg
      size: "36",
      style: { maxWidth: "5.31%", top: "86%", left: "76%" },
      name: "Ethereum",
      icon: "ethereum-eth-logo.svg",
    },
    {
      // user-17.jpg
      size: "44",
      style: { maxWidth: "6.49%", top: "59%", left: "76%" },
      name: "Fantom",
      icon: "fantom-ftm-logo.svg",
    },
    {
      // user-18.jpg
      size: "72",
      style: { maxWidth: "10.62%", top: "14%", left: "78%" },
      name: "Harmony",
      icon: "harmony-one-logo.svg",
    },
    {
      // user-19.jpg
      size: "64",
      style: { maxWidth: "9.44%", top: "40%", left: "89%" },
      name: "Near protocol",
      icon: "near-protocol-near-logo.svg",
    },
    {
      // user-20.jpg
      size: "24",
      style: { maxWidth: "3.54%", top: "74%", left: "91%" },
      name: "Polygon",
      icon: "polygon-matic-logo.svg",
    },
  ]);

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative">
            {/* Background image */}
            <svg
              className="mx-auto"
              viewBox="0 0 678 346"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="circle_b"
                >
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
                <linearGradient
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="89.386%"
                  id="circle_a"
                >
                  <stop stopColor="#292341" offset="0%" />
                  <stop stopColor="#292341" stopOpacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle
                  className="opacity-10 dark:opacity-100"
                  fill="url(#circle_a)"
                  opacity=".32"
                  cx="339"
                  cy="173"
                  r="173"
                />
                <circle
                  fill="url(#circle_b)"
                  opacity=".32"
                  cx="339"
                  cy="173"
                  r="140"
                />
              </g>
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                style={{ width: "30%", height: "auto", opacity: 0.5 }}
                className="mx-auto"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7328 6.38019C16.7328 4.56659 18.1978 3.09112 19.9985 3.09112C20.8709 3.09112 21.6912 3.43329 22.3079 4.05433C22.9245 4.67537 23.2642 5.50151 23.2642 6.38019V9.34763L25.3405 8.13991V6.38019C25.3405 4.94278 24.7847 3.59159 23.7762 2.5755C22.7673 1.55941 21.4261 1 19.9988 1C17.0531 1 14.6568 3.41342 14.6568 6.38019V18.1509L23.2646 23.1566V33.5385C23.2646 35.3521 21.7996 36.8275 19.9988 36.8275C19.1261 36.8275 18.3058 36.4854 17.6892 35.8643C17.0725 35.2433 16.7328 34.4171 16.7328 33.5385V30.5717L14.6565 31.7784V33.5385C14.6565 34.9762 15.2126 36.3274 16.2218 37.3428C17.2307 38.3589 18.572 38.9183 19.9985 38.9183C22.9442 38.9183 25.3405 36.5049 25.3405 33.5381V21.7691L16.7328 16.7637V6.38019Z"
                  fill="#0CCFAC"
                />
                <path
                  d="M34.3474 22.0901L26.4573 17.5021L32.2343 14.1426C32.5784 13.9419 32.7925 13.5691 32.7925 13.1696C32.7925 12.9736 32.7406 12.7796 32.6423 12.6085C32.4932 12.3482 32.2527 12.1623 31.9652 12.0848C31.6776 12.007 31.377 12.0464 31.1188 12.1967L22.1499 17.4122L33.3091 23.9007C34.0645 24.3396 34.6052 25.0495 34.831 25.8992C35.0567 26.7483 34.9403 27.6347 34.5029 28.3955C33.9221 29.4085 32.8383 30.038 31.6746 30.038C31.1041 30.038 30.541 29.8861 30.0457 29.5988L27.4919 28.1139V30.5287L29.0094 31.4101C29.8193 31.8806 30.7409 32.1291 31.6749 32.1291C33.5773 32.1291 35.3499 31.0999 36.301 29.4429C36.3902 29.2876 36.4722 29.1277 36.5447 28.9667V28.9663C36.6173 28.806 36.6825 28.6407 36.7387 28.4746C36.7671 28.3911 36.7929 28.3076 36.8169 28.2234C36.9607 27.7185 37.0293 27.1962 37.0206 26.6711C37.0136 26.2303 36.952 25.7884 36.8377 25.358C36.4682 23.9687 35.5837 22.8082 34.3474 22.0901Z"
                  fill="#0CCFAC"
                />
                <path
                  d="M21.114 6.38036C21.114 6.08028 20.998 5.79805 20.7873 5.58588C20.5767 5.3737 20.2964 5.25684 19.9985 5.25684C19.3832 5.25684 18.8829 5.76101 18.8829 6.38036V15.513L19.9985 16.161L30.0418 10.3218C30.5394 10.0332 31.1035 9.88026 31.6733 9.88026C32.8377 9.88026 33.9222 10.5111 34.503 11.5268C34.7896 12.0253 34.9411 12.5934 34.9411 13.1697C34.9411 14.34 34.3164 15.4305 33.3109 16.0165L30.7561 17.5025L32.8324 18.7095L34.3509 17.8268C35.9954 16.8673 37.017 15.0826 37.017 13.17C37.017 12.2263 36.7696 11.2968 36.3011 10.4818C35.35 8.8214 33.5767 7.78982 31.6727 7.78982C30.7387 7.78982 29.8154 8.03938 29.0032 8.51122L21.1134 13.0986V6.38036H21.114Z"
                  fill="#E651F3"
                />
                <path
                  d="M3.65454 15.7896C3.71941 15.9072 3.79298 16.0281 3.87993 16.1591C4.0906 16.4777 4.33304 16.7714 4.60055 17.0317C4.91489 17.3379 5.26835 17.6059 5.65157 17.8286L13.5414 22.4166L7.76463 25.7761C7.42053 25.9768 7.20685 26.3496 7.20685 26.7491C7.20685 26.9451 7.25868 27.1391 7.357 27.3102C7.55563 27.6567 7.92681 27.8723 8.32542 27.8723C8.5197 27.8723 8.71164 27.8204 8.88052 27.7224L17.8481 22.5076L6.68987 16.018C5.9338 15.5781 5.39308 14.8682 5.16769 14.0195C4.94298 13.1701 5.06002 12.2837 5.49674 11.5232C6.07826 10.5098 7.16171 9.88035 8.32441 9.88035C8.89556 9.88035 9.45936 10.0326 9.9546 10.3209L12.5071 11.8058V9.391L10.9916 8.50828C10.1817 8.03779 9.25939 7.78924 8.32441 7.78924C6.42169 7.78924 4.64938 8.8188 3.69935 10.4755C2.98407 11.7202 2.79347 13.1708 3.16264 14.56C3.27701 14.9911 3.44253 15.4047 3.65454 15.7896Z"
                  fill="#0CCFAC"
                />
                <path
                  d="M8.32444 12.0461C7.92651 12.0461 7.556 12.2613 7.35736 12.6082C7.20822 12.8682 7.16809 13.1706 7.24534 13.4603C7.32225 13.7502 7.50684 13.9927 7.76533 14.1429L12.5074 16.9009V14.3056L8.88055 12.1963C8.71067 12.0979 8.51839 12.0461 8.32444 12.0461Z"
                  fill="#E651F3"
                />
                <path
                  d="M18.8838 33.5386C18.8838 33.8387 18.9998 34.1209 19.2105 34.3331C19.4212 34.5453 19.7014 34.6622 19.9997 34.6622C20.6146 34.6622 21.1152 34.158 21.1152 33.5386V24.4066L20 23.7576L19.9977 23.7586L9.95702 29.5979C9.46044 29.8862 8.89631 30.0384 8.32549 30.0384C7.16112 30.0384 6.07633 29.4083 5.49481 28.3935C5.20823 27.8927 5.05675 27.3242 5.05675 26.7493C5.05675 25.5797 5.68174 24.4888 6.68794 23.9028L9.24174 22.4175L7.16546 21.2098L5.64763 22.0922C4.00239 23.0521 2.98047 24.8367 2.98047 26.7493C2.98047 27.6923 3.22792 28.6219 3.69642 29.4379C4.64811 31.0983 6.42176 32.1295 8.32549 32.1295C9.2598 32.1295 10.1827 31.8803 10.995 31.4084L18.8838 26.8207V33.5386V33.5386Z"
                  fill="#E651F3"
                />
                <path
                  d="M31.675 27.8727C32.0726 27.8727 32.4431 27.6575 32.642 27.3106C32.7912 27.0506 32.831 26.7481 32.7541 26.4585C32.6772 26.1685 32.4926 25.926 32.2344 25.7762L27.4923 23.0192V25.6132L31.1192 27.7221C31.2881 27.8205 31.4803 27.8727 31.675 27.8727Z"
                  fill="#E651F3"
                />
              </svg>
            </div>
            {/*People pics*/}
            {items.map((item, index) => (
              <img
                key={index}
                className="absolute z-10 animate-float"
                style={item.style}
                src={require(`../images/chains/${item.icon}`).default}
                width={item.size}
                height={item.size}
                alt={`User ${index + 1}`}
                onMouseEnter={() => {
                  setActive(index);
                  setCommentOn(true);
                }}
                onMouseLeave={() => setCommentOn(false)}
              />
            ))}
            {/* Comment box */}
            <div
              className={`opacity-0 transition duration-150 ease-in-out absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 max-w-xs w-full p-3 bg-white dark:bg-gray-800 text-center shadow-2xl z-20 pointer-events-none ${
                commentOn && "opacity-100"
              }`}
            >
              <div className="text-gray-600 dark:text-gray-400 mb-1">
                {items[active].comment}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">
                {items[active].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCircles;
