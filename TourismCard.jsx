function TourismCard({ place }) {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />

      <div className="card-content">
        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <button className="card-btn">Read More</button>
      </div>
    </div>
  );
}
