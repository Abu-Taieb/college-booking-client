import React from "react";

const Form = () => {
  return (
    <div className="w-full md:w-11/12 m-auto px-5 py-20">
        <div className="text-center py-10 w-full md:w-3/5 m-auto mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-accent ">
          Student Admission Form
        </h2>
        <p className="">
          There are different type of input field. Feel free to input your current data very carefully. If you input wrong data please re-check your input information and update your data must be.
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="input input-bordered input-accent w-full"
            required
          />
          <input
            type="file"
            required
            className="file-input file-input-bordered file-input-accent w-full"
          />
        </div>
        <button className="btn btn-block btn-accent my-10">Submit</button>
      </form>
    </div>
  );
};

export default Form;
