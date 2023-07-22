// eslint-disable-next-line react/prop-types
const Card = ({ college }) => {
  // eslint-disable-next-line react/prop-types
  const colData = college.college;
  const { id, name, image, admission_date, events, research_history, sports } =
    colData;
  console.log(colData);

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="College" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold uppercase text-center">{name}</h2>
          <h2 className="font-bold text-center">Admission Date: {admission_date}</h2>
          <div className="">
          <h2 className="font-bold">Our College Events: </h2>
          <h4>{events[0].name}</h4>
          <h4>{events[1].name}</h4>
          </div>
          <h2 className="font-bold">Research History: {research_history[0].title}</h2>
          <h2 className="font-bold">Sports: {sports[0].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
