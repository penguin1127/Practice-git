function PersonalAdCard({ name, introduction, onClick }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold cursor-pointer" onClick={onClick}>
        {name}
      </h3>
      <p className="text-gray-600">{introduction}</p>
    </div>
  );
}

export default PersonalAdCard;