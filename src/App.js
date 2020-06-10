import React, { useState } from "react";
import styled from "styled-components";
import Global from "./Global";
import { AskName, Game } from "./screens";

const AppWrap = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 60em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const App = () => {
  const [playerName, setPlayerName] = useState(null);
  const [level, setLevel] = useState(1);
  const [won, setWon] = useState(false);
  const handleWin = () => {
    setWon(true);
  };
  return (
    <>
      <Global />
      <AppWrap>
        <Game playerName="Gareth" level={level} win={handleWin} won={won} />
        {/* {playerName ? (
          <Game
            playerName={playerName}
            level={level}
            win={handleWin}
            won={won}
          />
        ) : (
          <AskName setPlayerName={setPlayerName} />
        )} */}
      </AppWrap>
    </>
  );
};

export default App;
