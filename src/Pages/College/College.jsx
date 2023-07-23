import { useEffect, useState } from "react";
import CollegeRouteData from "./CollegeRouteData";
import Admission from "../Admission/Admission";

const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("college.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="w-full md:w-11/12 m-auto px-5 py-10">
      <div className="text-center py-10 w-full md:w-3/5 m-auto mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5">
          Our Colleges
        </h2>
        <p className="">
          There are three type of colleges. All colleges are top of the world.
          You can chose any college of your choice.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
        {colleges.map((college) => (
          <CollegeRouteData
            key={college.id}
            college={college}
          ></CollegeRouteData>
        ))}
      </div>
    </div>
  );
};

export default College;
