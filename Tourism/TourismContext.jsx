import { createContext } from "react";

export const TourismContext = createContext();

const places = [
  {
    id: 1,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Known for the Eiffel Tower, romantic atmosphere and world-class cuisine."
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Famous for beaches, temples, waterfalls and tropical beauty."
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    description: "White houses, blue domes and spectacular sunset views."
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "A perfect blend of modern technology and traditional culture."
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    description: "Luxury lifestyle, iconic skyscrapers and desert adventures."
  },
  {
    id: 6,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Snow-covered mountains and breathtaking natural beauty."
  }
];

export function TourismProvider({ children }) {
  return (
    <TourismContext.Provider value={{ places }}>
      {children}
    </TourismContext.Provider>
  );
}