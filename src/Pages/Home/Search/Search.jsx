const Search = () => {
  return (
    <div className="w-11/12 m-auto text-center pt-20">
      <div className="">
        <h2 className="text-3xl font-bold uppercase mb-5">
          Search Your Colleges
        </h2>
      </div>
      <div className="text-center">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="College name"
          />
          <button className="btn join-item rounded-xl border border-gray-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
