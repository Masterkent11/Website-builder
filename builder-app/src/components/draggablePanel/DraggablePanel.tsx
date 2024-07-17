// components/DraggablePanel.tsx
import React, { useRef } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { ItemTypes } from "@/types/components/ItemTypes";
import { Gripper } from "@/assets/svg";
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
      <Gripper />
      <div className="text-xs font-bold text-gray-500">ALL USERS</div>
    </div>
  );
};

export default DraggablePanel;
