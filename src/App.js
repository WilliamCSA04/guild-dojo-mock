import React, { useState, useEffect } from "react";
import Match from "./components/Match";
import { get } from "./services";

export default function App() {
  const [cupData, setCupData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);
  useEffect(() => {
    get("cup").then(response => setCupData(response[0].data.data));
    get("league").then(response => setLeagueData(response));
  }, []);
  return (
    <>
      <div>Hello Mocks</div>
      <section>
        <ul>
          {cupData.map(data => {
            return <Match matchData={data} />;
          })}
        </ul>
      </section>
    </>
  );
}
