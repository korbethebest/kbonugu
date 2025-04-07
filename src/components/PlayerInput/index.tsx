import * as styleX from "@stylexjs/stylex";
import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react";

import type { Player } from "../../types";
import { GuessList } from "./GuessList";
import { PlayerDropdown } from "./PlayerDropdown";
import { SearchInput } from "./SearchInput";
import { gapStyles, inputWrapperStyles } from "./styles";

type PlayerInputProps = {
  players: Player[];
  answerPlayer: Player;
  guesses: Player[];
  setGuesses: Dispatch<SetStateAction<Player[]>>;
}

function PlayerInput({ players, answerPlayer, guesses, setGuesses }: PlayerInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const endOfGuessesRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(value.length >= 2);
  };

  const handlePlayerSelect = (player: Player) => {
    setInputValue("");
    setShowDropdown(false);
    setGuesses((prev) => [...prev, player]);
  };

  const filteredPlayers = players.filter((player) => 
    player.name.startsWith(inputValue)
  );
  
  useEffect(() => {
    const isGameOver = guesses.length > 0 && guesses[guesses.length - 1].id === answerPlayer.id;
    const isMaxGuesses = guesses.length === 10;
    
    if (!isGameOver && !isMaxGuesses && endOfGuessesRef.current) {
      endOfGuessesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [guesses, answerPlayer.id]);

  return (
    <div {...styleX.props(inputWrapperStyles.base)}>
      <SearchInput 
        value={inputValue}
        onChange={handleInputChange}
      />
      
      {showDropdown && filteredPlayers.length > 0 && (
        <PlayerDropdown 
          players={filteredPlayers}
          onSelect={handlePlayerSelect}
        />
      )}
      
      <div {...styleX.props(gapStyles.base)}/>
      
      <GuessList 
        guesses={guesses}
        answerPlayer={answerPlayer}
        endOfGuessesRef={endOfGuessesRef as React.RefObject<HTMLDivElement>}
      />
    </div>
  );
}

export default PlayerInput;
