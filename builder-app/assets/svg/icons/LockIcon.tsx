import React from "react";

const LockIcon = () => {
  return (
    <>
      <svg
        width={20}
        height={20}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <path
          d="M14.78 9.44V6.78a3.78 3.78 0 0 0-7.56 0v2.66"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <rect
          x="3.89"
          y="10.11"
          width="14.22"
          height="8.89"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></rect>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 13.67v2.66"
        ></path>
        <path
          fill="currentColor"
          d="M11 12.33a1.34 1.34 0 1 0 1.33 1.34A1.33 1.33 0 0 0 11 12.33z"
        ></path>
      </svg>
    </>
  );
};

export default LockIcon;
