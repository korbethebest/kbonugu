import type { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

import AnswerAlert from '../components/AnswerAlert';
import AppWrapper from "../components/AppWrapper";
import ContentsWrapper from "../components/ContentWrapper";
import PlayerImage from "../components/PlayerImage";
import PlayerInput from "../components/PlayerInput";
import RetryButton from '../components/RetryButton';
import Title from "../components/Title";

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

type HomepageProps = {
  players: Player[];
}

export default function HomePage({ players, errorMessage }: HomepageProps & { errorMessage?: string }) {
  const [error, setError] = useState<string | null>(errorMessage || null);
  const [correct, setCorrect] = useState(false);
  const [answerPlayer, setAnswerPlayer] = useState(players[Math.floor(Math.random() * players.length)]);

  const handleRetryButton = () => {
    setCorrect(false);
    setAnswerPlayer(players[Math.floor(Math.random() * players.length)]);
    setError(null);
  };

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {correct && <ReactConfetti width={dimensions.width} height={dimensions.height} />}
      <AppWrapper>
        {correct && <AnswerAlert playerName={answerPlayer.name}/> }
        <Title />
        <RetryButton handleRetryButton={handleRetryButton} />
        <ContentsWrapper>
          <PlayerImage correct={correct} answerPlayerImageUrl={answerPlayer.image} />
          <PlayerInput players={players} answerPlayer={answerPlayer} setCorrect={setCorrect} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </ContentsWrapper>
      </AppWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apiBaseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : "http://localhost:3000/api";
  try {
    const response = await fetch(apiBaseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    const players: Player[] = await response.json();

    return {
      props: {
        players: players.length > 0 ? players : [{ id: 0, name: "Unknown", image: "../../public/images/questionMark.png" }],
        errorMessage: null,
      },
    };
  } catch (error) {
    console.error('Failed to fetch players:', error);

    return {
      props: {
        players: [{ id: 0, name: "Unknown", image: "../../public/images/questionMark.png" }],
        errorMessage: 'Failed to fetch players',
      },
    };
  }
};