import * as styleX from "@stylexjs/stylex";

export const inputWrapperStyles = styleX.create({
  base: {
    minWidth: 320,
    width: "90%",
    maxWidth: 500,
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
    width: "100%",
    minWidth: 320,
    maxWidth: 500,
    minHeight: 50,
    padding: "0px 10px",
    marginBottom: "25px",
    border: "none",
    borderRadius: 6,
    boxSizing: "border-box",
    fontSize: "20px",
    appearance: "none", /* Removes default styling on some browsers */
  },
});

export const dropDownWrapperStyles = styleX.create({
  base: {
    position: 'absolute',
    top: '100%',       // right below input
    left: 0,
    width: '100%',
    border: 'none',
    borderRadius: 8,
    zIndex: 10,        // highest
  },
});

export const dropDownButtonWrapperStyles = styleX.create({
  base: {
    width: '100%',
    maxHeight: "200px", // maximum height 200px
    overflowY: 'auto', // allow scrolling
    overflowX: 'hidden',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 8,
    '::-webkit-scrollbar': {
      width: 8,
      borderRadius: 6,
      backgroundColor: '#E0E0E0',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: '#606060',
    },
  },
});

export const dropDownButtonStyles = styleX.create({
  base: {
    width: "100%",
    minHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
    border: "none",
    boxSizing: "border-box",
    textAlign: "left",
    backgroundColor: "white",
    ":not(:last-child)": {
      borderBottom: "1px solid gray",
    },
    touchAction: "manipulation", /* Improves touch experience */
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

export const inputAreaWrapperStyles = styleX.create({
  base: {
    position: "relative",
    width: "100%",
  },
});
