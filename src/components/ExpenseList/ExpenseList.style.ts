import styled from 'styled-components';
import { borderColor, darkGrey, mSize, lSize, offWhite, sSize } from '../../theme/variables';
import media from '../../theme/media';

export const UlList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${sSize} ${mSize};
  background: ${offWhite};
  border: 1px solid ${borderColor};
  color: ${darkGrey};
`;

export const P = styled.p`
  margin-top: ${mSize};
  font-style: italic;
  ${media.tablet`
    margin-top: ${lSize};
  `}
`;
