import React, { useState } from "react";
import styled from "styled-components";
import Global from "./Global";
import { Congrats, Game, Welcome } from "./screens";

const AppWrap = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 60em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [playerName, setPlayerName] = useState(null);
  const [level, setLevel] = useState(1);
  const [won, setWon] = useState(false);
  const [lastGuessCount, setLastGuessCount] = useState(0);
  const [stars, setStars] = useState(0);
  const starScores = [20, 16, 12];
  const handleWin = (guessCount) => {
    setWon(true);
    setLastGuessCount(guessCount);
    setStars(
      starScores.reduce(
        (acc, score, i) => (guessCount <= score ? i + 1 : acc),
        0
      )
    );
  };
  const nextLevel = () => {
    setLevel(level + 1);
    setWon(false);
  };
  const tryAgain = () => {
    setWon(false);
  };
  return (
    <>
      <Global />
      <AppWrap>
        {/* <Game playerName='Gareth' level={level} win={handleWin} won={won} /> */}
        {playerName ? (
          won ? (
            <Congrats
              playerName={playerName}
              level={level}
              lastGuessCount={lastGuessCount}
              stars={stars}
              nextLevel={nextLevel}
              tryAgain={tryAgain}
            />
          ) : (
            <Game
              playerName={playerName}
              level={level}
              setStars={setStars}
              win={handleWin}
            />
          )
        ) : (
          <Welcome setPlayerName={setPlayerName} />
        )}
      </AppWrap>
    </>
  );
};

export default App;
