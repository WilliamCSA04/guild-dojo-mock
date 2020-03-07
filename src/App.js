import React, { useState, useEffect } from "react";
import { get } from "./services";

export default function App() {
  const [cupData, setCupData] = useState([])
  const [leagueData, setLeagueData] = useState([])
  useEffect(() => {
    get('cup').then(response => setCupData(response))
    get('league').then(response => setLeagueData(response))
  }, [])
  return (
    <>
      <div>Hello Mocks</div>
      <div>Cup: {JSON.stringify(cupData)}</div>
      <div>League: {JSON.stringify(leagueData)}</div>
    </>
  );
}
