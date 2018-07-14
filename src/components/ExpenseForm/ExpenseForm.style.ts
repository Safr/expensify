import styled, { css } from 'styled-components';
import {
  blue,
  borderColor,
  darkRed, fontSizeLarge, fontSizeSmall, lSize, mSize, sSize, white } from '../../theme/variables';
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
    margin-bottom: ${lSize};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 800px;
  `}
`;

export const TextInput = styled.input`
  height: 50px;
  margin-bottom: ${sSize};
  padding: ${sSize};
  font-size: ${fontSizeLarge};
  font-weight: 300;
  border: 1px solid #cacccd;
`;

export const TextArea = styled.textarea`
  height: 100px;
  margin-bottom: ${sSize};
  margin-top: ${sSize};
  padding: ${sSize};
  font-size: ${fontSizeLarge};
  font-weight: 300;
  border: 1px solid ${borderColor};
`;

export const Paragraph = styled.p`
  margin: 0 0 ${mSize} 0;
  font-style: italic;
`;

export const Button = styled.button`
  display: inline-block;
  padding: ${sSize};
  margin-top: ${mSize};
  margin-right: auto;
  font-size: ${fontSizeSmall};
  font-weight: 300;
  line-height: 1;
  color: ${white};
  background: ${blue};
  ${({ red }) => red && css`
    background: ${darkRed};
  `}
  border-radius: 3px;
  border: none;
  ${media.tablet`
    font-size: ${fontSizeLarge};
  `}
` as any;

