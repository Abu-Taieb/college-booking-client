import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold pb-5">Please Registration!</h1>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
              <h3 className="text-sm text-center py-2">
                Already have an account? {" "}
                <Link to={"/signIn"} className="text-accent font-bold">
                  Log In
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
