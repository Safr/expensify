import styled from 'styled-components';
import { borderColor, darkGrey, fontSizeSmall, offWhite, mSize, sSize } from '../../theme/variables';
import media from '../../theme/media';

export const ListItem = styled.li`
  padding: ${sSize};
  border: 1px solid ${borderColor};
  border-top: none;
  transition: background-color .3s ease;

  h3 {
    word-break: break-all;
  }

  span {
    font-size: ${fontSizeSmall};
  }

  p:nth-child(2) {
    margin: ${sSize} 0 0 0;
    ${media.tablet`
      margin: 0;
      padding-left: ${sSize};
    `}
  }

  a {
    display: flex;
    flex-direction: column;
    color: ${darkGrey};
    ${media.tablet`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: ${mSize};
    `}

    &:hover {
      background-color: ${offWhite};
    }
  }
`;

export const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${sSize} ${mSize};
  background: ${offWhite};
  border: 1px solid ${borderColor};
  color: ${darkGrey};
`;
