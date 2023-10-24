import React from "react";
import Container from "../../components/Container/Container";

const ShiftCreate = () => {
  return (
    <div className="bg-light">
      <Container>
        <div className="py-10 h-[calc(100vh-68px)] flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl mb-5 font-semibold text-dark">Create Shift</h1>
          <div className="max-w-2xl mx-auto bg-white ">
            <form className="grid grid-cols-2 gap-5 bg-white">
              <div className="flex flex-col">
                <label htmlFor="name">Your Name <span className="text-[#D94A38]">*</span></label>
                <input placeholder="Enter you name..." className="border outline-none py-1 px-3 border-darklight rounded-md" type="text" name="name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="shiftName">Shift Name <span className="text-[#D94A38]">*</span></label>
                <input placeholder="Enter shit name..." className="border outline-none py-1 px-3 border-darklight rounded-md" type="text" name="shiftName" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startTime">Start Time <span className="text-[#D94A38]">*</span></label>
                <input className="border outline-none py-1 px-3 border-darklight rounded-md" type="time" name="startTime" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endTime">End Time <span className="text-[#D94A38]">*</span></label>
                <input className="border outline-none py-1 px-3 border-darklight rounded-md" type="time" name="endTime" />
              </div>
              <button type="submit" className="bg-primary py-2 text-light rounded-3xl hover:bg-secondary transition">Submit</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShiftCreate;
