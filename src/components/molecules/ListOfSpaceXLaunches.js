// import React, { useState, useEffect } from "react";
import LaunchCard from "../atoms/LaunchCard";

const ListOfSpaceXLaunches = ({ spacexData }) => {

    const UpcomingLaunchs =spacexData.filter(launch => launch.upcoming === true);
  return (
    <>
      {UpcomingLaunchs.length > 0 && UpcomingLaunchs.map((data) => (
        <LaunchCard LaunchData={data}  key ={data.flight_number}/>
      ))}
    </>
  );
};

export default ListOfSpaceXLaunches;
