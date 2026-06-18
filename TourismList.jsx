import { useContext } from "react";
import { TourismContext } from "./TourismContext";
import TourismCard from "./TourismCard";

function TourismList() {
  const { places } = useContext(TourismContext);

  return (
    <section id="places">
      <h2 className="section-title">🌍 Popular Destinations</h2>

      <div className="card-container">
        {places.map((place) => (
          <TourismCard key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
}

export default TourismList;