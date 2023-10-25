import React from "react";

const ShiftItem = ({ shift }) => {
  console.log(shift);
  const { name, start, end } = shift;
  return (
    <div>
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="text-gray-500">{start}</p>
            <p className="text-gray-500">{end}</p>
          </div>
          {/* delete button */}
          <button className="bg-red-400 px-5 rounded-lg text-white hover:bg-red-500 transition">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShiftItem;
