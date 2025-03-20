import * as styleX from "@stylexjs/stylex";

function Title() {
  return <h1 {...styleX.props(styles.base)}>크보 누구?!</h1>;
}

export default Title;

const styles = styleX.create({
  base: {
    fontSize: 64,
    fontWeight: 500,
    color: "white",
  },
});
