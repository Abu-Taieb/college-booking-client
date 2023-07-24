/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Card = ({ college }) => {
  // eslint-disable-next-line react/prop-types
  const colData = college;
  // eslint-disable-next-line react/prop-types
  const { name, image, admission_date, events, research_history, sports } =
    colData;

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="College" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold uppercase text-center">{name}</h2>
          <h2 className="text-md uppercase font-bold text-center">
            Admission Date: {admission_date}
          </h2>
          <div className="my-2">
            <h2 className="font-bold mb-3">Our College Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
                {events[0].name}
              </h4>
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
                {events[1].name}
              </h4>
            </div>
          </div>
          <div className="my-2">
            <h2 className="font-bold mb-3">Student Research History</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
                {research_history[0].title}
              </h4>
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
                {research_history[1].title}
              </h4>
            </div>
          </div>

          <div className="my-2">
            <h2 className="font-bold mb-3">Sports</h2>
            <div className="grid grid-cols-2 gap-4">
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
              {sports[0].name}
              </h4>
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
              {sports[1].name}
              </h4>
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
              {sports[2].name}
              </h4>
              <h4 className="border border-base-200 px-3 py-1 rounded-xl">
              {sports[3].name}
              </h4>
            </div>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-md btn-accent">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
