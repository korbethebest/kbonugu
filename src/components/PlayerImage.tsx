import * as styleX from "@stylexjs/stylex";

import SampeImage from "../../public/images/questionMark.png";

type PlayerImageProps = {
  correct: boolean;
  answerPlayerImageUrl: string;
};

function PlayerImage({ correct, answerPlayerImageUrl }: PlayerImageProps) {
  const src = correct ? answerPlayerImageUrl : SampeImage.src;

  return (
    <div {...styleX.props(imageWrapperStyles.base)}>
      <img src={src} width={300} height={376.6} {...styleX.props(imageStyles.base)} alt="KBO player img" />
    </div>
  );
}

export default PlayerImage;

const imageWrapperStyles = styleX.create({
  base: {
    minWidth: "100%",
    width: "100%",
    height: 376.6,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
});

const imageStyles = styleX.create({
  base: {
    width: 300,
    height: 376.6,
    objectFit: "cover",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
