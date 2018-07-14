import styled from 'styled-components';
import { darkBlue, sSize, white, mSize, lSize } from '../../theme/variables';
import media from '../../theme/media';

export const HeaderTag = styled.header`
  width: 100%;
  min-width: 320px;
  margin: 0;
  padding: 0;
  background-color: ${darkBlue};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${sSize};
  ${media.desktop`
    max-width: 940px;
    margin: 0 auto;
  `}
`;

export const Title = styled.h1`
  margin: 0;
  ${media.tablet`
    margin-bottom: 0;
    margin-right: ${lSize};

    a {
      font-size: ${lSize};
    }
  `}

  a {
    font-size: 24px;
    color: ${white};
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  color: ${white};
`;
