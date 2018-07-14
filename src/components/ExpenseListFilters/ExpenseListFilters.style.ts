import styled from 'styled-components';
import { lSize, mSize, sSize, fontSizeLarge } from '../../theme/variables';
import media from '../../theme/media';

export const InputGroup = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  margin-bottom: ${mSize};
  ${media.tablet`
    flex-direction: row;
    margin-bottom: ${lSize};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 960px;
  `}
`;

export const InputGroupItem = styled.div`
  margin-bottom: ${sSize};
  ${media.tablet`
    margin-bottom: 0;
    margin-right: ${sSize};
  `}
`;

export const TextInput = styled.input`
  height: 50px;
  padding: ${sSize};
  font-size: ${fontSizeLarge};
  font-weight: 300;
  border: 1px solid #cacccd;
`;

export const Select = styled.select`
  height: 50px;
  padding: ${sSize};
  font-size: ${fontSizeLarge};
  font-weight: 300;
  border: 1px solid #cacccd;
`;
