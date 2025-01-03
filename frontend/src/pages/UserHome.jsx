import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationPanel from "../components/LocationPanel";

const UserHome = () => {
  const locationPanelRef = useRef(null);
  const [isLocationPanelOpen, setIsLocationPanelOpen] = useState(false);

  useGSAP(
    function () {
      if (isLocationPanelOpen) {
        gsap.to(locationPanelRef.current, { height: "100vh", opacity: 100 });
      } else {
        gsap.to(locationPanelRef.current, { height: 0, opacity: 0 });
      }
    },
    [isLocationPanelOpen]
  );

  return (
    <div>
      <div className="w-full min-h-screen bg-cover bg-[url(https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif)]">
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <div className="p-4 absolute bottom-0 right-0 left-0 bg-white h-48">
          <h2 className="text-2xl font-semibold">Find a trip</h2>
          <div className="w-full relative">
            <div className="h-16 w-1 bg-black rounded-full absolute left-4 top-1/2 -translate-y-[50%]" />
            <input
              onClick={() => {
                setIsLocationPanelOpen(true);
              }}
              readOnly
              className="w-full placeholder:text-lg bg-zinc-200 px-8 py-2 mt-2 outline-none rounded-md"
              placeholder="Add a pickup location"
              type="text"
            />
            <input
              onClick={() => {
                setIsLocationPanelOpen(true);
              }}
              readOnly
              className="w-full placeholder:text-lg bg-zinc-200 px-8 py-2 mt-2 outline-none rounded-md"
              placeholder="Enter your destination"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* panels */}
      <div
        ref={locationPanelRef}
        className="bg-white h-0 absolute left-0 right-0 bottom-0"
      >
        {isLocationPanelOpen && (
          <LocationPanel setIsLocationPanelOpen={setIsLocationPanelOpen} />
        )}
      </div>
    </div>
  );
};

export default UserHome;
