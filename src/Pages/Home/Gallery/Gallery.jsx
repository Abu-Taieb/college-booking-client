import { useEffect } from "react";
import { useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="w-full md:w-11/12 m-auto px-5">
      <div className="text-center py-10 w-full md:w-3/5 m-auto mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5">
          Our Graduate Students
        </h2>
        <p className="">
          There are three type of colleges. All colleges are top of the world.
          You can chose any college of your choice.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {students.map((student) => (
          <GalleryCard key={student.id} student={student}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
