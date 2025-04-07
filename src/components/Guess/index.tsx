import * as styleX from "@stylexjs/stylex";

import type { Player } from "../../types";
import { GuessItem } from "./GuessItem";
import { TeamItem } from "./TeamItem";
import { playerNameStyles, rowStyles, wrapperStyles } from "./styles";

type GuessProps = {
  index: number;
  guessPlayer: Player;
  answerPlayer: Player;
};

function Guess({ index, guessPlayer, answerPlayer }: GuessProps) {
  const getDirectionArrow = (guessValue: number, answerValue: number): string => {
    if (guessValue > answerValue) return "⬇️";
    if (guessValue < answerValue) return "⬆️";
    return "";
  };

  return (
    <div {...styleX.props(wrapperStyles.base)}>
      <div {...styleX.props(playerNameStyles.base)}>
        {`#${index}. ${guessPlayer.name}`}
      </div>
      
      <div {...styleX.props(rowStyles.base)}>
        <TeamItem 
          team={guessPlayer.team} 
          isCorrect={guessPlayer.team === answerPlayer.team} 
        />
        
        <GuessItem 
          value={guessPlayer.position}
          isCorrect={guessPlayer.position === answerPlayer.position}
          label="포지션"
        />
        
        <GuessItem 
          value={String(guessPlayer.age)}
          isCorrect={guessPlayer.age === answerPlayer.age}
          label="나이"
          direction={getDirectionArrow(guessPlayer.age, answerPlayer.age)}
        />
      </div>
      
      <div {...styleX.props(rowStyles.base)}>
        <GuessItem 
          value={guessPlayer.backnumber}
          isCorrect={guessPlayer.backnumber === answerPlayer.backnumber}
          label="백넘버"
          direction={getDirectionArrow(Number(guessPlayer.backnumber), Number(answerPlayer.backnumber))}
        />
        
        <GuessItem 
          value={String(guessPlayer.draftyear).slice(-2)}
          isCorrect={guessPlayer.draftyear === answerPlayer.draftyear}
          label="드래프트 연도"
          direction={getDirectionArrow(guessPlayer.draftyear, answerPlayer.draftyear)}
        />
      </div>
    </div>
  );
}

export default Guess;
