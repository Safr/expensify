import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blue, fontSizeLarge, fontSizeSmall, lSize, mSize, offWhite, sSize, white } from '../../theme/variables';
import media from '../../theme/media';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: ${sSize};
  margin-top: ${mSize};
  margin-right: auto;
  font-size: ${fontSizeSmall};
  font-weight: 300;
  line-height: 1;
  color: ${white};
  background: ${blue};
  border: none;
  ${media.tablet`
    font-size: ${fontSizeLarge};
  `}
`;

export const StyledSpan = styled.span`
  font-weight: 700;
`;

export const PageHeader = styled.div`
  padding: ${sSize};
  font-size: ${fontSizeSmall};
  background-color: ${offWhite};
  ${media.tablet`
    padding: ${lSize};
    font-size: ${fontSizeLarge};
  `}

  h2 {
    text-align: left;
  }
`;
