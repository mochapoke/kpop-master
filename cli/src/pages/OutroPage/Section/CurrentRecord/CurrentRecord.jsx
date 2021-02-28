import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { RiTimer2Line } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import Accordion from '../Accordion/Accordion';
import { COLORS } from '../../../../constants/theme';

const TableContainer = styled.table`
  width: 100%;
  font-size: 16px;
  font-weight: 200;
  margin-top: -0.2rem;
  border-radius: 10px;
  text-align: center;
  color: ${COLORS.headingDarkGray};
`;

const TableContext = styled.td`
  color: ${({ isWorng }) =>
    isWorng === 'correct' ? `${COLORS.headingDarkGray}` : 'red'};
  font-weight: 200;
  overflow: hidden;
  padding: 0.3rem 1rem;
  font-size: 14px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
  font-size: 16px;
  color: black;

  #list-container {
    display: flex;
    flex-direction: row;
  }
`;

const TitleList = styled.li`
  margin-right: 1rem;
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  color: ${COLORS.headingDarkGray};

  .icon {
    color: ${COLORS.contentGrayLight};
    margin-right: 7px;
  }
`;

const CurrentRecord = ({ gameResult, averageResponseTime }) => {
  const [quantityOfCorrect, setquantityOfCorrect] = useState(0);
  const [quantityOfWrong, setQuantitiyOfWrong] = useState(0);

  useEffect(() => {
    const correct = gameResult.filter((game) => game.result === 'correct')
      .length;
    setquantityOfCorrect(correct);

    const wrong = gameResult.filter((game) => game.result === 'wrong').length;
    setQuantitiyOfWrong(wrong);
    // eslint-disable-next-line
  }, []);

  const title = (
    <TitleContainer>
      <ul id='list-container'>
        <TitleList>
          <FiCheckCircle className='icon' />
          {quantityOfCorrect}개
        </TitleList>
        <TitleList>
          <FiX className='icon' />
          {quantityOfWrong}개
        </TitleList>
        <TitleList>
          <RiTimer2Line className='icon' />
          평균 {averageResponseTime}초
        </TitleList>
      </ul>
    </TitleContainer>
  );

  const content = (
    <TableContainer>
      <tbody>
        {gameResult.map((song) => (
          <tr key={song.id}>
            <TableContext id='index' isWorng={song.result}>
              {song.roundIndex + 1}
            </TableContext>
            <TableContext isWorng={song.result} id='trackName'>
              {song.trackName}
            </TableContext>
            <TableContext isWorng={song.result}>
              {(song.responseTime / 1000).toFixed(2)}
            </TableContext>
            <TableContext isWorng={song.result}>
              {song.result === 'wrong' ? <FiX /> : <FiCheckCircle />}
            </TableContext>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );

  return <Accordion title={title} content={content} />;
};

export default CurrentRecord;
