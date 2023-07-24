const Contact = () => {
  return (
    <div>
      <div className="w-full md:w-11/12 m-auto px-5 py-20">
        <div className="text-center w-full md:w-3/5 m-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-accent ">
            Contact Us
          </h2>
          <p className="">
            There are different type of input field. Feel free to input your
            current data very carefully. If you input wrong data please re-check
            your input information and update your data must be.
          </p>
        </div>
        <form>
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered input-accent w-full"
                required
              />
              <input
                type="text"
                placeholder="Last name"
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
              <textarea
                className="textarea textarea-bordered textarea-lg w-full textarea-accent"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn btn-wide btn-accent my-10">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
