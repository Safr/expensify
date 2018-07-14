import styled from 'styled-components';
import { blue, fontSizeLarge, fontSizeSmall, lSize, mSize, offWhite, sSize, white } from '../../theme/variables';
import media from '../../theme/media';

const PageHeader = styled.div`
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

export default PageHeader;
