import * as styleX from "@stylexjs/stylex";
import type { RefObject } from "react";

import type { Player } from "../../types";
import Guess from "../Guess";
import { gapStyles } from "./styles";

type GuessListProps = {
  guesses: Player[];
  answerPlayer: Player;
  endOfGuessesRef: RefObject<HTMLDivElement>;
};

export const GuessList = ({ guesses, answerPlayer, endOfGuessesRef }: GuessListProps) => {
  if (guesses.length === 0) return null;
  
  return (
    <>
      {guesses.map((guess, index) => (
        <Guess 
          key={guess.id} 
          index={index + 1} 
          guessPlayer={guess} 
          answerPlayer={answerPlayer}
        />
      ))}
      <div {...styleX.props(gapStyles.base)} ref={endOfGuessesRef} />
    </>
  );
};
