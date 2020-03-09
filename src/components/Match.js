import React, { memo } from "react";

function Match({ matchData }) {
  console.log(matchData);
  return <li>{matchData.nome}</li>;
}

export default memo(Match);
