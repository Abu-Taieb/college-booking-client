const Testimonial = () => {
  return (
    <>
      <div className="w-full md:w-11/12 m-auto px-5">
        <div className="text-center py-10 w-full md:w-3/5 m-auto my-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5">
            Our Testimonial
          </h2>
          <p className="">
            There are three type of colleges. All colleges are top of the world.
            You can chose any college of your choice.
          </p>
        </div>
        <div className="w-1/2 m-auto">
          <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/743GfJQ/1.jpg" className="w-1/3 rounded-lg mr-5" />
              <div className="">
                <h2>Name</h2>
                <h4>Des</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam sed molestiae laudantium officiis tenetur quidem.
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/GkBhVPQ/4.jpg" className="w-1/3" />
              <div className="">
                <h2>Name</h2>
                <h4>Des</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam sed molestiae laudantium officiis tenetur quidem.
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/zNxkN9w/6.jpg" className="w-1/3" />
              <div className="">
                <h2>Name</h2>
                <h4>Des</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam sed molestiae laudantium officiis tenetur quidem.
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/ZWMpRGM/2.jpg" className="w-1/3" />
              <div className="">
                <h2>Name</h2>
                <h4>Des</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam sed molestiae laudantium officiis tenetur quidem.
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
