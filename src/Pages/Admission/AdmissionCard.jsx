import React from "react";
import { Link } from "react-router-dom";

const AdmissionCard = ({ admission }) => {
  const admitData = admission.college;
  return (
    <div>
      <div className="card w-full border border-accent text-accent-content">
        <div className="card-body text-center">
          <h2 className="card-title text-2xl uppercase font-bold justify-center">
            {admitData.name}
          </h2>
          <hr className="border-accent my-2" />
          <p className="py-3 text-justify">
            If you want to grow up your career and future then you can admission
            in this College.
          </p>
          <div className="card-actions justify-end">
            <Link to={'/form'}>
              <button className="btn btn-accent">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCard;
