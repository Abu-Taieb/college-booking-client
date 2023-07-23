const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.bowdoin.edu/_content-blocks/moments_images/commencement-23-lineup-c.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full md:w-2/3 px-5">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold uppercase">Welcome to our top of the world <strong className="text-accent">TAG</strong> Colleges.</h1>
          <p className="mb-5">
            This college is an awesome environment, and our teacher teaching is excellent to other college. If you want to grow up your career you can admit this college.
          </p>
          <button className="btn btn-accent font-bold">Admission Open </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
