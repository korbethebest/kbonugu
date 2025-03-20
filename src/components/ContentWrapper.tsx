import * as styleX from "@stylexjs/stylex";

type ContentsWrapperProps = {
  children: React.ReactNode;
};

function ContentsWrapper({ children }: ContentsWrapperProps) {
  return <div {...styleX.props(wrapperStyles.base)}>{children}</div>;
}

export default ContentsWrapper;

const wrapperStyles = styleX.create({
  base: {
    minWidth: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    gap: 30,
  },
});
