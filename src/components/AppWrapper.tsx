import * as styleX from "@stylexjs/stylex";

type AppWrapperProps = {
  children: React.ReactNode;
};

function AppWrapper({ children }: AppWrapperProps) {
  return <div {...styleX.props(wrapperStyles.base)}>{children}</div>;
}

export default AppWrapper;

const wrapperStyles = styleX.create({
  base: {
    minWidth: 320,
    maxHeight: "100vh",
    overFlowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    position: "relative",
  },
});
