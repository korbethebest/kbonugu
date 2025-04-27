import * as styleX from "@stylexjs/stylex";

import type { Player } from "../../types";
import { convertTeamNameToEnglish } from "../../utils";
import { dropDownButtonStyles, dropDownButtonWrapperStyles, dropDownEmptyWrapperStyles, dropDownWrapperStyles, inputContentStyles, inputEachContentStyles } from "./styles";

type PlayerDropdownProps = {
  players: Player[];
  onSelect: (player: Player) => void;
};

export const PlayerDropdown = ({ players, onSelect }: PlayerDropdownProps) => {
  return (
    <div {...styleX.props(dropDownWrapperStyles.base)}>
      <div {...styleX.props(dropDownButtonWrapperStyles.base)}>
        {players.map((player) => (
          <button
            type="button"
            key={player.id}
            onClick={() => onSelect(player)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSelect(player);
              }
            }}
            {...styleX.props(dropDownButtonStyles.base)}
          >
            <div {...styleX.props(inputContentStyles.base)}>
              <div {...styleX.props(inputEachContentStyles.base)}>
                <img 
                  src={`/images/${convertTeamNameToEnglish(player.team)}.png`} 
                  alt={player.team} 
                  width={40} 
                  height={40}
                />
              </div>
              <div {...styleX.props(inputEachContentStyles.base)}>{player.name}</div>
              <div {...styleX.props(inputEachContentStyles.base)}>{player.position}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
