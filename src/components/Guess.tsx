import * as styleX from "@stylexjs/stylex";
import Image from 'next/image';

type Player = {
  id: number;
  name: string;
  team: string;
  position: string;
  age: number;
  backnumber: string;
  draftyear: number;
  image: string; 
}

type GuessProps = {
  index: number;
  guessPlayer: Player;
  answerPlayer: Player;
};

function Guess ({index, guessPlayer, answerPlayer}: GuessProps) { 
  return (
    <div {...styleX.props(wrapperStyles.base)}>
        <div {...styleX.props(playerNameStyles.base)}>
            {`#${index}. ${guessPlayer.name}`}
        </div>
        <div {...styleX.props(rowStyles.base)}>
            <div {...styleX.props(itemStyles.base)}>
              <div {...styleX.props(itemInfoStyles.base, guessPlayer.team === answerPlayer.team && itemInfoStyles.correct)}>
                <Image src={`/images/${guessPlayer.team}.png`} alt={guessPlayer.team} width={55} height={55}/>
              </div>
              <div {...styleX.props(itemTextStyles.base)}>
                팀
              </div>
            </div>
            <div {...styleX.props(itemStyles.base)}>
              <div {...styleX.props(itemInfoStyles.base, guessPlayer.position === answerPlayer.position && itemInfoStyles.correct)}>
                {guessPlayer.position}
              </div>
              <div {...styleX.props(itemTextStyles.base)}>
                포지션
              </div>
            </div>
            <div {...styleX.props(itemStyles.base)}>
              <div {...styleX.props(itemInfoStyles.base, guessPlayer.age === answerPlayer.age && itemInfoStyles.correct)}>
                {`${guessPlayer.age} ${guessPlayer.age > answerPlayer.age ? "⬇️" : guessPlayer.age < answerPlayer.age ? "⬆️" : ""}`}
              </div>
              <div {...styleX.props(itemTextStyles.base)}>
                나이
              </div>
            </div>
        </div>
        <div {...styleX.props(rowStyles.base)}>
            <div {...styleX.props(itemStyles.base)}>
              <div {...styleX.props(itemInfoStyles.base, guessPlayer.backnumber === answerPlayer.backnumber && itemInfoStyles.correct)}>
              {`${guessPlayer.backnumber} ${Number(guessPlayer.backnumber) > Number(answerPlayer.backnumber) ? "⬇️" : Number(guessPlayer.backnumber) < Number(answerPlayer.backnumber) ? "⬆️" : ""}`}
              </div>
              <div {...styleX.props(itemTextStyles.base)}>
                백넘버
              </div>
            </div>
            <div {...styleX.props(itemStyles.base)}>
              <div {...styleX.props(itemInfoStyles.base, guessPlayer.draftyear === answerPlayer.draftyear && itemInfoStyles.correct)}>
              {`${String(guessPlayer.draftyear).slice(-2)} ${guessPlayer.draftyear > answerPlayer.draftyear ? "⬇️" : guessPlayer.draftyear < answerPlayer.draftyear ? "⬆️" : ""}`}
              </div>
              <div {...styleX.props(itemTextStyles.base)}>
                드래프트 연도
              </div>
            </div>
        </div>
    </div>
  )
}

export default Guess;

const wrapperStyles = styleX.create({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: "100%",
    marginBottom: "25px",
  }
});

const rowStyles = styleX.create({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

const playerNameStyles = styleX.create({
  base: {
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    color: "white",
  }
});

const itemStyles = styleX.create({
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

const itemInfoStyles = styleX.create({
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

const itemTextStyles = styleX.create({
  base: {
    textAlign: "center",
  }
});