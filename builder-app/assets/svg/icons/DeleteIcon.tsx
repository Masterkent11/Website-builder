import React from "react";

interface DeleteIcon {
  onClick?: () => void;
}

const DeleteIcon: React.FC<DeleteIcon> = ({ onClick }) => {
  return (
    <div
      className="mp-button-content cursor-pointer flex items-center"
      onClick={onClick}
    >
      <svg
        width={"24"}
        height={"24"}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.85 3.5a.835.835 0 00-.85.86v.157h3.3V4.36a.834.834 0 00-.85-.861h-1.6V3.5zm3.95 1.017V4.36A2.335 2.335 0 0011.45 2h-1.6A2.335 2.335 0 007.5 4.36v.157H5.25C4.031 4.517 3 5.562 3 6.777v.201c0 .622.21 1.2.63 1.623.27.272.603.457.97.554v7.186c0 1.178.896 2.159 2.05 2.159h8.1c1.155 0 2.05-.981 2.05-2.16V9.172a2.216 2.216 0 001.7-2.194v-.2c0-1.216-1.031-2.26-2.25-2.26H13.8zm1.5 4.721H6.1v7.103c0 .432.305.659.55.659h8.1c.245 0 .55-.227.55-.66V9.238zM4.5 6.778c0-.397.369-.76.75-.76h11c.381 0 .75.363.75.76v.2c0 .464-.336.76-.75.76h-11c-.278 0-.452-.09-.555-.194-.104-.104-.195-.282-.195-.566v-.2zm4.25 3.477a.75.75 0 01.75.75v3.725a.75.75 0 11-1.5 0v-3.725a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v3.725a.75.75 0 101.5 0v-3.725z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default DeleteIcon;
