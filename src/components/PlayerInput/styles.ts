import * as styleX from "@stylexjs/stylex";

export const inputWrapperStyles = styleX.create({
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

export const inputStyles = styleX.create({
  base: {
    width: 320,
    minHeight: 50,
    padding: "0px 10px",
    marginBottom: "25px",
    border: "none",
    borderRadius: 6,
    boxSizing: "border-box",
    fontSize: "20px",
  },
});

export const dropDownWrapperStyles = styleX.create({
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

export const dropDownButtonStyles = styleX.create({
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

export const inputContentStyles = styleX.create({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

export const inputEachContentStyles = styleX.create({
  base: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    color: "black"
  }
});

export const gapStyles = styleX.create({
  base: {
    width: "100%",
    minHeight: 25,
  }
});
