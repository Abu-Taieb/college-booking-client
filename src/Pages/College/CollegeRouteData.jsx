const CollegeRouteData = ({ college }) => {
  const allData = college;
  const { name, image, admission_date, events, research_history, rating } =
    allData;

  console.log(allData.research_history.length);

  return (
    <div className="mb-10">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="College" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold uppercase text-center py-2">
            {name}
          </h2>
          <div className="px-10 space-y-2">
            <h2 className="text-md uppercase font-bold">
              College Rating : {rating}
            </h2>
            <h2 className="text-md uppercase font-bold">
              Admission Date : {admission_date}
            </h2>
            <h2 className="text-md uppercase font-bold">
              Total Research History : 0{research_history.length}
            </h2>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-md btn-accent">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeRouteData;
