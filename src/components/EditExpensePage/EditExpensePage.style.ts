import styled from 'styled-components';
import { fontSizeLarge, fontSizeSmall, lSize, mSize, offWhite, sSize } from '../../theme/variables';
import media from '../../theme/media';

export const ButtonWrapper = styled.div`
  display: flex;
  max-width: 620px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  ${media.tablet`
    margin-bottom: ${lSize};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    padding-top: 0;
    max-width: 800px;
  `}
`;

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