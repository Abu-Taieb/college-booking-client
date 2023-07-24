import { useEffect, useState } from "react";
import Card from "./Card";

const CollegeData = () => {
    const [colleges, setCollege] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/college")
        .then((res) => res.json())
        .then((data) => setCollege(data));
    }, []);
  
    return (
      <div className="w-full md:w-11/12 m-auto py-14 px-5">
        <div className="text-center py-10 w-full md:w-3/5 m-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5">
            Our Best Colleges
          </h2>
          <p className="">
            There are three type of colleges. All colleges are top of the world.
            You can chose any college of your choice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          {colleges.map((college) => (
            <Card key={college.id} college={college}></Card>
          ))}
        </div>
      </div>
    );
  };

export default CollegeData;