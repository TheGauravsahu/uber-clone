import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {
  const { captain, setCaptain } = useContext(CaptainDataContext);
  return <div>{JSON.stringify(captain)}</div>;
};

export default CaptainHome;
