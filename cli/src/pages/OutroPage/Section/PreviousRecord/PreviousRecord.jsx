import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLORS, SIZES, FONT } from '../../../../constants/theme';
import { BiRocket } from 'react-icons/bi';
import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${COLORS.shadowLight};
  box-shadow: 0 4px 8px 0 ${COLORS.shadowLight};
  border-radius: ${SIZES.radiusSmall};
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 200;
  font-family: ${FONT.korean};
  display: flex;
  align-items: center;
`;

const Content = styled.span`
  font-size: 16px;
  color: black;
  font-family: ${FONT.korean};
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 0.3rem;
`;

const PreviousRecord = ({ averageResponseTime, gameResult, myBestRecord }) => {
  const [trackListToPlay] = useContext(TrackListToPlayContext);
  const user = useSelector((state) => state.user);
  const [userId] = useState(user.userData._id);

  useEffect(() => {
    uploadRecordToDB();
  }, []);

  const uploadRecordToDB = async () => {
    const correctAnswers = gameResult
      .filter((game) => game.result === 'correct')
      .map((song) => song.trackName);

    const wrongAnswers = gameResult
      .filter((game) => game.result === 'wrong')
      .map((song) => song.trackName);

    const gameData = {
      player: userId,
      record: averageResponseTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
      theme: trackListToPlay.theme,
    };

    await axios.post('/api/game/upload', gameData);
  };

  return (
    <Wrapper>
      <Title>
        <BiRocket /> <Bold>{user.userData.displayName}</Bold>
        님의 이전 최고 기록
      </Title>
      <Content>{myBestRecord}초</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
