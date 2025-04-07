import * as styleX from "@stylexjs/stylex";

import { itemInfoStyles, itemStyles, itemTextStyles } from "./styles";

type GuessItemProps = {
  value: string | React.ReactNode;
  isCorrect: boolean;
  label: string;
  direction?: string;
};

export const GuessItem = ({ value, isCorrect, label, direction = "" }: GuessItemProps) => {
  return (
    <div {...styleX.props(itemStyles.base)}>
      <div {...styleX.props(itemInfoStyles.base, isCorrect && itemInfoStyles.correct)}>
        {typeof value === "string" ? `${value} ${direction}` : value}
      </div>
      <div {...styleX.props(itemTextStyles.base)}>
        {label}
      </div>
    </div>
  );
};
