import * as styleX from "@stylexjs/stylex";

function AnswerAlert({ playerName }: { playerName: string }) {
  return (
    <div {...styleX.props(playerNameAlertStyles.base)}>정답은 {playerName} 선수입니다!</div>
  )
}

export default AnswerAlert;

const playerNameAlertStyles = styleX.create({
  base: {
    position: "absolute",
    top: "0px",
    left: "50%",
    marginLeft: "-150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "40px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
  }
});