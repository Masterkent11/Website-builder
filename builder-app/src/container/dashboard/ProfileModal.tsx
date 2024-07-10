//
import React, { useEffect, useState } from "react";
// import Button from "@/common/Button";
// import Input from "@/common/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfileModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("createProfile");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "createProfile":
        return (
          <div className="flex justify-between p-4">
            <div className="flex-1 mr-2">
              <label className="block text-sm font-medium text-gray-700">
                Property Name
              </label>
              <Input placeholder={"  Property Name"} type={"input"} name={""} />
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-sm font-medium text-gray-700">
                Value
              </label>
              <Input placeholder={"  Property Name"} type={"text"} name={""} />
              <div className="flex-1 ml-2">
                <Input placeholder={"  Name"} type={"text"} name={""} />
              </div>
            </div>
          </div>
        );
      case "updateProfile":
        return <div className="p-4">Update Profile Content</div>;
      case "importFromCSV":
        return <div className="p-4">Import from CSV Content</div>;
      default:
        return null;
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create or Modify Profile</DialogTitle>
          </DialogHeader>
          <div className="border-b border-gray-200 mb-4">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "createProfile"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("createProfile")}
              >
                Create Profile
              </button>
              <button
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "updateProfile"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("updateProfile")}
              >
                Update Profile
              </button>
              <button
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "importFromCSV"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("importFromCSV")}
              >
                Import from CSV
              </button>
            </nav>
          </div>
          {renderTabContent()}
          <div className="flex justify-end mt-4">
            <Button
              className="mr-2 bg-gray-300 text-gray-700"
              onClick={onClose}
              data-testid=""
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-500 text-white"
              onClick={() => console.log("Create Profile")}
              data-testid=""
            >
              Create Profile
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileModal;
