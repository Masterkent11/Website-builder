// export default Filter;
import React, { useState } from "react";
import CvIcon from "@/assets/svg/CvIcon";
import EditIcon from "@/assets/svg/EditIcon";
import HideFilter from "@/assets/svg/HideFilter";
import Profile from "@/assets/svg/Profile";
import Button from "@/common/Button";
import ProfileModal from "./ProfileModal"; // Adjust the import path as necessary

const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-4 flex justify-between">
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <span>0</span>
        <span>Users With Profiles</span>
      </div>
      <div className="flex">
        <div className="flex">
          <Button
            data-testid={""}
            className="flex items-center justify-center gap-2 text-xs text-gray-600"
          >
            <HideFilter />
            Hide Filter
          </Button>
        </div>
        <div className="flex items-center">
          <Button
            data-testid={""}
            className="flex items-center justify-center gap-2 text-xs text-gray-600"
          >
            <EditIcon />
            Edit Columns
          </Button>
        </div>
        <div className="flex items-center">
          <Button
            data-testid={""}
            className="flex items-center justify-center gap-2 text-xs text-gray-600"
          >
            <CvIcon />
            Export
          </Button>
        </div>
        <div className="flex items-center ">
          <Button
            data-testid={""}
            className="flex items-center justify-center gap-2 text-xs text-gray-600"
            onClick={() => setIsModalOpen(true)}
          >
            <Profile />
            Add/Edit Profile
          </Button>

          <ProfileModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
