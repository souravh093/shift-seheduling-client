import React from "react";
import Container from "../../components/Container/Container";

const ShiftCreate = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const shiftName = target.shiftName.value;
    const startTime = target.startTime.value;
    const endTime = target.endTime.value;
    console.log(name, shiftName, startTime, endTime)
  }
  return (
    <div className="bg-light">
      <Container>
        <div className="py-10 h-[calc(100vh-68px)] flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl mb-5 font-semibold text-dark">
            Create Shift
          </h1>
          <div className="lg:w-2/4 md:w-3/4 w-full px-10 py-20 rounded-md shadow-sm mx-auto bg-white ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <input
                    placeholder="Enter you name..."
                    className="border-b outline-none py-1 text-2xl px-3 border-darklight rounded-md"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Enter shit name..."
                    className="border-b text-2xl outline-none py-1 px-3 border-darklight rounded-md"
                    type="text"
                    name="shiftName"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label htmlFor="startTime">
                    Start Time <span className="text-[#D94A38]">*</span>
                  </label>
                  <input
                    className="border outline-none py-1 px-3 border-darklight rounded-md"
                    type="time"
                    name="startTime"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="endTime">
                    End Time <span className="text-[#D94A38]">*</span>
                  </label>
                  <input
                    className="border outline-none py-1 px-3 border-darklight rounded-md"
                    type="time"
                    name="endTime"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary py-2 text-light rounded-3xl hover:bg-secondary transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShiftCreate;
