// eslint-disable-next-line react/prop-types
const GalleryCard = ({ student }) => {
  // eslint-disable-next-line react/prop-types
  const group = student;
  const { image, name } = group;

  console.log(group);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
        <img className="rounded-xl" src={image} alt="Shoes" />
    </div>
  );
};

export default GalleryCard;
