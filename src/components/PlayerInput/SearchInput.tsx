import * as styleX from "@stylexjs/stylex";
import type { ChangeEvent } from "react";

import { inputStyles } from "./styles";

type SearchInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const SearchInput = ({ value, onChange, placeholder = "KBO 선수를 맞춰보세요!" }: SearchInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      inputMode="text"
      {...styleX.props(inputStyles.base)}
    />
  );
};
