const Newsletter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 md:gap-5 bg-accent py-20 mt-20 px-5">
      <div className="text-center">
        <h2 className="text-5xl font-bold uppercase text-white py-2">
          News Letter
        </h2>
        <h4 className="text-4xl font-bold uppercase text-white py-2">
          Please Subscribe
        </h4>
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-bold uppercase text-white py-2">
          Enter your email
        </h4>
        <div className="join">
          <input
            className="input input-bordered join-item rounded-l-full"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
