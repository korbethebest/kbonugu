import * as styleX from "@stylexjs/stylex";

import { convertTeamNameToEnglish } from "../../utils";
import { itemInfoStyles, itemStyles, itemTextStyles } from "./styles";

type TeamItemProps = {
  team: string;
  isCorrect: boolean;
};

export const TeamItem = ({ team, isCorrect }: TeamItemProps) => {
  return (
    <div {...styleX.props(itemStyles.base)}>
      <div {...styleX.props(itemInfoStyles.base, isCorrect && itemInfoStyles.correct)}>
        <img
          src={`/images/${convertTeamNameToEnglish(team)}.png`}
          width={55}
          height={55}
          alt={team}
        />
      </div>
      <div {...styleX.props(itemTextStyles.base)}>
        팀
      </div>
    </div>
  );
};
