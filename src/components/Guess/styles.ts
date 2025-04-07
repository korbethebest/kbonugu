import * as styleX from "@stylexjs/stylex";

export const wrapperStyles = styleX.create({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: "100%",
    marginBottom: "25px",
  }
});

export const rowStyles = styleX.create({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

export const playerNameStyles = styleX.create({
  base: {
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    color: "white",
  }
});

export const itemStyles = styleX.create({
  base: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "18px",
    color: "white",
  }
});

export const itemInfoStyles = styleX.create({
  base: {
    display: "flex",
    width: "75px",
    height: "75px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "gray",
  },
  correct: {
    backgroundColor: "green",
  }
});

export const itemTextStyles = styleX.create({
  base: {
    textAlign: "center",
  }
});
