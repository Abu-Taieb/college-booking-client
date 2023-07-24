import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-black h-screen p-5">
      <div className="w-full md:w-11/12 m-auto text-center">
        <h2 className="text-5xl text-accent font-bold text-center py-10">
          Oops
        </h2>
        <div className="bg-slate-600 p-3 border border-3 border-white rounded-t-full w-full md:w-1/3 m-auto">
          <div className="p-7 bg-accent rounded-t-full w-full m-auto">
            <img
              className="rounded-full h-48 w-48 m-auto"
              src="https://a0.anyrgb.com/pngimg/120/1848/yr-paris-abusive-head-trauma-cute-child-babybel-crying-child-girl-crying-crying-baby-baby-crying-cannes-lions-international-festival-of-creativity-mother-child.png"
              alt=""
            />
            <h2 className="text-3xl text-accent font-bold text-white text-center pt-5">
              404 ERROR
            </h2>
            <h2 className="text-3xl text-accent font-bold text-white text-center pb-5">
              Page Not Found
            </h2>
          </div>
        </div>
        <Link to={"/"} className="btn btn-accent text-center my-5">
          Back to TGA
        </Link>
      </div>
    </div>
  );
};

export default Error;
