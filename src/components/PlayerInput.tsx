import * as styleX from "@stylexjs/stylex";
import Image from 'next/image';
import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react";

import Guess from "./Guess";

type Player = {
  id: number;
  name: string;
  team: string;
  position: string;
  age: number;
  backnumber: string;
  draftyear: number;
  image: string;  
}

function PlayerInput({players, answerPlayer, setCorrect}: {players: Player[], answerPlayer: Player, setCorrect: Dispatch<SetStateAction<boolean>>}) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [guesses, setGuesses] = useState<Player[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(value.length >= 2);
  };

  const handlePlayerClick = (player: Player) => {
    setInputValue("");
    setShowDropdown(false);
    setGuesses((prev) => [...prev, player]);
  };

  const filteredPlayers = players.filter((player) => player.name.startsWith(inputValue));

  const endOfGuessesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (guesses. length > 0 && guesses[guesses.length - 1].id === answerPlayer.id || guesses.length === 10) {
      setCorrect(true);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [guesses, answerPlayer.id, setCorrect]);

  useEffect(() => {
    if (answerPlayer.id) {
      setGuesses([]);
    }
  }, [answerPlayer]);

  useEffect(() => {
    if (!(guesses. length > 0 && guesses[guesses.length - 1].id === answerPlayer.id || guesses.length === 10) && endOfGuessesRef.current) {
      endOfGuessesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [guesses, answerPlayer.id]);

  return (
    <div {...styleX.props(inputWrapperStyles.base)}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="KBO 선수를 맞춰보세요!"
        {...styleX.props(inputStyles.base)}
      />
      {showDropdown && filteredPlayers.length > 0 && (
        <div {...styleX.props(dropDownWrapperStyles.base)}>
          {filteredPlayers.map((eachPlayer) => (
            <button
              type="button"
              key={eachPlayer.id}
              onClick={() => handlePlayerClick(eachPlayer)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePlayerClick(eachPlayer);
                }
              }}
              {...styleX.props(
                dropDownButtonStyles.base,
              )}
            >
              <div {...styleX.props(inputContentStyles.base)}>
                <div {...styleX.props(inputEachContentStyles.base)}>
                <Image src={`/images/${eachPlayer.team}.png`} alt={eachPlayer.team} width={40} height={40}/>
                </div>
                <div {...styleX.props(inputEachContentStyles.base)}>{eachPlayer.name}</div>
                <div {...styleX.props(inputEachContentStyles.base)}>{eachPlayer.position}</div>
              </div>
            </button>
          ))}
        </div>
      )}
      <div {...styleX.props(gapStyles.base)}/>
      {guesses.length > 0 && guesses.map((guess, index) => (
        <Guess key={guess.id} index={index + 1} guessPlayer={guess} answerPlayer={answerPlayer}
        />
      ))}
      <div {...styleX.props(gapStyles.base)} ref={endOfGuessesRef} />
    </div>
  );
}

export default PlayerInput;

const inputWrapperStyles = styleX.create({
  base: {
    minWidth: 320,
    height: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    position: "relative",
  },
});

const inputStyles = styleX.create({
  base: {
    width: 320,
    minHeight: 50,
    padding: "0px 10px",
    marginBottom: "25px",
    border: "none",
    borderRadius: 6,
    boxSizing: "border-box",
  },
});

const dropDownWrapperStyles = styleX.create({
  base: {
    maxHeight: 200,
    position: "absolute",
    top: "100%",
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    border: "none",
    borderRadius: 6,
    overflowX: "hidden",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: 8,
      borderRadius: 6,
      backgroundColor: "#E0E0E0"
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: 6,
      backgroundColor: "#606060",
    },
  },
});

const dropDownButtonStyles = styleX.create({
  base: {
    width: 320,
    minHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
    border: "none",
    boxSizing: "border-box",
    textAlign: "left",
    backgroundColor: "white",
    ":not(:last-child)": {
      borderBottom: "1px solid gray",
    }
  },
});

const inputContentStyles = styleX.create({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

const inputEachContentStyles = styleX.create({
  base: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

const gapStyles = styleX.create({
  base: {
    width: "100%",
    minHeight: 25,
  }
});