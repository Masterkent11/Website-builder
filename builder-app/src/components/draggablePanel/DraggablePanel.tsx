// components/DraggablePanel.tsx

import React, { useRef } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { ItemTypes } from "../../types/ItemTypes"; // Adjust path as per your project structure

interface DragItem {
  type: string;
}

const DraggablePanel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag<DragItem, void, { isDragging: boolean }>({
    type: ItemTypes.PANEL,
    item: { type: ItemTypes.PANEL },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return (
    <div
      ref={ref}
      className={`pb-4  border-gray-300  rounded-xl cursor-grab flex `}
    >
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#6b7280"
        className="inline-block mr-2"
        style={{ color: "#6b7280" }}
      >
        <path d="M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z " />
      </svg>
      <div className="text-xs font-bold text-gray-500">ALL USERS</div>
    </div>
  );
};

export default DraggablePanel;
