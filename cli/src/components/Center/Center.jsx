import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';

const Center = styled.div`
  width: 100%;
  height: ${({ inGame }) => (inGame ? '100%' : '')};

  display: flex;
  flex-direction: column;
  justify-content: ${({ inGame }) => (inGame ? 'center' : 'space-around')};
  align-items: center;

  background: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : 'transparent')};

  @media ${SCREEN.tablet} {
    height: ${({ inGame }) => inGame && '90vh'};
    background: #ffffff;
    #first {
      order: 1;
    }
    #second {
      order: 2;
    }
    #third {
      order: 3;
    }
    #four {
      order: 4;
    }
  }
`;

export default Center;
