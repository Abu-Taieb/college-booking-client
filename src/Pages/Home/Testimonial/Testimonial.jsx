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
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src="https://i.ibb.co/743GfJQ/1.jpg"
                  className=" rounded-lg mr-5"
                />
                <div className="">
                  <h2 className="font-bold uppercase py-1">James</h2>
                  <h4 className="font-bold uppercase py-1">EASTWOOD COLLEGE</h4>
                  <p className="justify">
                    This college is an awesome for education. It is a natural
                    beauty of this college garden. Teachers are friendly.
                  </p>
                  <div className="rating pt-5">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                  </div>
                </div>
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
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/GkBhVPQ/4.jpg"
                  className="w-1/3 rounded-lg mr-5"
                />
                <div className="">
                  <h2 className="font-bold uppercase py-1">Olivia</h2>
                  <h4 className="font-bold uppercase py-1">
                    CENTRALVILLE COLLEGE
                  </h4>
                  <p className="justify">
                    This college is an awesome for education. It is a natural
                    beauty of this college garden. Teachers are friendly.
                  </p>
                  <div className="rating pt-5">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                  </div>
                </div>
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
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/zNxkN9w/6.jpg"
                  className="w-1/3 rounded-lg mr-5"
                />
                <div className="">
                  <h2 className="font-bold uppercase py-1">Emily</h2>
                  <h4 className="font-bold uppercase py-1">EASTWOOD COLLEGE</h4>
                  <p className="justify">
                    This college is an awesome for education. It is a natural
                    beauty of this college garden. Teachers are friendly.
                  </p>
                  <div className="rating pt-5">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                  </div>
                </div>
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
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/bLgYGhH/21.jpg"
                  className="w-1/3 rounded-lg mr-5"
                />
                <div className="">
                  <h2 className="font-bold uppercase py-1">Michael</h2>
                  <h4 className="font-bold uppercase py-1">
                    RIVERSIDE COLLEGE
                  </h4>
                  <p className="justify">
                    This college is an awesome for education. It is a natural
                    beauty of this college garden. Teachers are friendly.
                  </p>
                  <div className="rating pt-5">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-accent"
                      checked
                    />
                  </div>
                </div>
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
