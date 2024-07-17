import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LockIcon2 } from "@/assets/svg";

const ProfileModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("createProfile");
  const [properties, setProperties] = useState([
    { id: Date.now(), name: "", value: "" },
  ]);

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

  const addProperty = () => {
    setProperties([...properties, { id: Date.now(), name: "", value: "" }]);
  };

  const removeProperty = (id: number) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const handlePropertyChange = (id: number, field: string, value: string) => {
    setProperties(
      properties.map((property) =>
        property.id === id ? { ...property, [field]: value } : property
      )
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "createProfile":
        return (
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Property Name</h4>
                <div className="relative">
                  {/* <svg
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
                  </svg> */}
                  <LockIcon2 />
                  <Input
                    className="pl-10"
                    placeholder={"$distinct_id"}
                    type={"text"}
                    value={""}
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
                <div className="relative">
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
                  <Input
                    className="pl-10" // Adjust padding-left to accommodate the icon
                    placeholder={"name"}
                    type={"text"}
                    value={""}
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-between">
                <h4 className="font-medium">Value</h4>
                <div className="flex flex-col gap-2">
                  <Input
                    className="border border-gray-300 rounded-md py-2 px-4"
                    placeholder="jane@example.com"
                    name=""
                    id=""
                    type="text"
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <Input
                    className="border border-gray-300 rounded-md py-2 px-4"
                    id=""
                    name=""
                    placeholder="Jane Smith"
                    type="text"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {properties.length > 0 && (
              <>
                {properties.map((property, index) => (
                  <div
                    key={property.id}
                    className="grid grid-cols-2 gap-4 mb-4"
                  >
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder={"Property Name"}
                        type={"text"}
                        value={property.name}
                        onChange={(e) =>
                          handlePropertyChange(
                            property.id,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-row gap-2">
                      <Input
                        placeholder={"Value"}
                        type={"text"}
                        value={property.value}
                        onChange={(e) =>
                          handlePropertyChange(
                            property.id,
                            "value",
                            e.target.value
                          )
                        }
                      />
                      <div
                        className="flex items-center"
                        style={{ width: "24px" }}
                      >
                        {index > -1 && (
                          <button onClick={() => removeProperty(property.id)}>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.85 3.5a.835.835 0 00-.85.86v.157h3.3V4.36a.834.834 0 00-.85-.861h-1.6V3.5zm3.95 1.017V4.36A2.335 2.335 0 0011.45 2h-1.6A2.335 2.335 0 007.5 4.36v.157H5.25C4.031 4.517 3 5.562 3 6.777v.201c0 .622.21 1.2.63 1.623.27.272.603.457.97.554v7.186c0 1.178.896 2.159 2.05 2.159h8.1c1.155 0 2.05-.981 2.05-2.16V9.172a2.216 2.216 0 001.7-2.194v-.2c0-1.216-1.031-2.26-2.25-2.26H13.8zm1.5 4.721H6.1v7.103c0 .432.305.659.55.659h8.1c.245 0 .55-.227.55-.66V9.238zM4.5 6.778c0-.397.369-.76.75-.76h11c.381 0 .75.363.75.76v.2c0 .464-.336.76-.75.76h-11c-.278 0-.452-.09-.555-.194-.104-.104-.195-.282-.195-.566v-.2zm4.25 3.477a.75.75 0 01.75.75v3.725a.75.75 0 11-1.5 0v-3.725a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v3.725a.75.75 0 101.5 0v-3.725z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            <Button
              className="mt-2 bg-[#7b80ff] hover:bg-[#7b80ff] text-white"
              onClick={addProperty}
            >
              + Add Property
            </Button>
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
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[60vmax] w-full max-w-md">
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
          <div className="flex justify-between mt-4">
            <Button
              className="mr-2 bg-gray-300 hover:bg-red-500 text-gray-700 hover:text-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className=" bg-[#7b80ff] hover:bg-[#7b80ff] text-white"
              onClick={() => console.log("Create Profile")}
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
