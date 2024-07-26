import React from "react";

const Application = () => {
  return (
    <>
      <div className="mp-chrome-header-trigger-container mp-chrome-header-trigger-container-help">
        <div
          className="mp-chrome-header-trigger-container-icon mp-chrome-header-trigger-container-notif"
          slot="trigger"
        >
          <svg
            width={24}
            height={24}
            color="white"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
          >
            <rect
              x="3"
              y="3"
              width="16"
              height="16"
              rx="8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6%"
            ></rect>
            <path
              d="M8.66 8.64a2.39 2.39 0 012.28-1.54 2.33 2.33 0 012.4 2.25c0 1-.57 1.47-1.46 2a1.55 1.55 0 00-.67 1.55"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6%"
            ></path>
            <path
              d="M11.24 14.37a.8.8 0 10.8.8.8.8 0 00-.8-.8z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Application;
