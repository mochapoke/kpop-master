import styled from 'styled-components';
import { COLORS, SIZES } from '../../constants/theme';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: ${SIZES.radiusSmall};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  color: #2c2c2c;

  border: 1px solid ${COLORS.shadowLight};
  box-shadow: 0 4px 8px 0 ${COLORS.shadowLight};
`;

export const Title = styled.button`
  width: 100%;
  height: 2rem;
  padding: 1.2rem 1rem;

  border: none;
  border-radius: ${SIZES.radiusSmall};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nanum gothic';
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  background: transparent;
  background-image: linear-gradient(
    120deg,
    ${COLORS.primaryShaodw} 0%,
    ${COLORS.primaryMiddle} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0%;
  background-position: 100% 100%;
  transition: background-size 0.3s ease;

  &:hover,
  &:focus {
    border: none;
    outline: none;
    background-size: 100% 100%;
  }

  .accordion-icon {
    transition: transform 0.3s ease;
    margin-left: 4px;
    color: ${COLORS.primaryDark};
  }

  .rotate {
    transform: rotate(90deg);
  }

  #icon {
    margin-right: 7px;
  }
`;

export const Content = styled.div`
  padding: 0 1rem;
  width: 100%;
  overflow: hidden;
  font-family: 'Nanum gothic';
  font-weight: 200;
`;
