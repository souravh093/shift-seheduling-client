import React, { useState } from "react";
import ShiftItem from "./ShiftItem/ShiftItem";

const Content = () => {
  const [shifts, setShifts] = useState([
    { id: 1, name: "Shift 1", start: "4:00 AM", end: "12:00 PM" },
    { id: 2, name: "Shift 2", start: "5:00 AM", end: "1:00 PM" },
    // Add more shifts as needed
  ]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 border-b-2 inline-block border-blue-400">All Shifts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shifts.map((shift) => (
          <ShiftItem
            key={shift.id}
            shift={shift}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
