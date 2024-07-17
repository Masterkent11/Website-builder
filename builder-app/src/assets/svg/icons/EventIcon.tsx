import React from "react";

const EventIcon = () => {
  return (
    <div className="option-icon item-icon align-left align-top">
      <svg
        width="16"
        height="16"
        fill="#463dbb"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path
          d="M9.014 9.64l3.068 8.766a.2.2 0 00.381-.01l1.376-4.803 4.54-1.297a.2.2 0 00.008-.382L9.644 9a.5.5 0 00-.63.64z"
          stroke="#463dbb"
          fill="#463dbb"
          strokeWidth="1.5"
        ></path>
        <path
          d="M2.625 19L4.5 16.5m0 0L6.375 19M4.5 16.5V14m0 2.5l2.5-.625m-2.5.625L2 15.875"
          stroke="#463dbb"
          strokeWidth="1.5"
          strokeLinecap="square"
        ></path>
        <path
          d="M9 3v2M3 9h2M13.573 4.813L12.16 6.228M4.814 4.813l1.414 1.415"
          stroke="#463dbb"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
};

export default EventIcon;
