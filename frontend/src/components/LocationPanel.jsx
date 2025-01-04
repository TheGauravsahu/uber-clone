import React from "react";

const LocationPanel = ({ setIsLocationPanelOpen }) => {
  const locations = [
    "Madhubani Painting Village",
    "Uchhaith Bhagwati Temple",
    "Kapileshwar Temple",
    "Saurath Sabha",
    "Nagar Fort",
    "Baba Gangeshwar Nath Temple",
    "Somnath Mahadev Temple",
    "Jhanjharpur",
  ];
  return (
    <div className="p-4">
      <span
        onClick={() => setIsLocationPanelOpen(false)}
        className="text-2xl font-semibold"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </span>

      <form>
        <div className="w-full relative">
          <div className="h-16 w-[3px] bg-black rounded-full absolute left-4 top-1/2 -translate-y-[50%]" />
          <input
            className="w-full placeholder:text-lg bg-zinc-200 px-8 py-2 mt-2 outline-none rounded-md"
            placeholder="Add a pickup location"
            type="text"
          />
          <input
            className="w-full placeholder:text-lg bg-zinc-200 px-8 py-2 mt-2 outline-none rounded-md"
            placeholder="Enter your destination"
            type="text"
          />
        </div>

        <button type="button" className="bg-gray-50  py-2 mt-4 rounded-full px-4 font-semibold flex items-center justify-center gap-2">
          Leave now
          <span>
            <i className="ri-arrow-drop-down-line"></i>
          </span>
        </button>
      </form>

      <div className="flex flex-col mt-4">
        {locations.map((l,i) => (
          <div key={i} className="flex items-center mt-2 gap-4">
            <span className="text-2xl font-semibold bg-gray-50 rounded-full p-2">
              <i className="ri-map-pin-line"></i>
            </span>
            <h4 className="font-semibold">{l}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPanel;
