import * as styleX from "@stylexjs/stylex";

function RetryButton({ handleRetryButton }: { handleRetryButton: () => void }) {
  return (
    <button onClick={() => handleRetryButton()} {...styleX.props(retryButtonStyles.base)}>다른 선수로 도전하기!</button>
  )
}

export default RetryButton;

const retryButtonStyles = styleX.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "40px",
    margin: "25px auto",
    backgroundColor: "#007aff",
    color: "white",
    border: "1px solid white",
    borderRadius: "15px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",

    ":hover": {
        backgroundColor: "#0056b3", 
      }, 
  }
});