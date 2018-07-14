import styled from 'styled-components';
import { lSize, mSize } from '../../theme/variables';

export const LoginWrapper = styled.div`
  align-items: center;
  background: url('${require('./images/bg.jpg')}') no-repeat center bottom;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const LoginInnerBox = styled.div`
  background: #f2f4ee;
  border-radius: 3px;
  padding: ${mSize} ${lSize};
  text-align: center;
  width: 35rem;
`;

export const Title = styled.h1`
  margin: 0 0 ${mSize} 0;
  line-height: 1;
`;
export const P = styled.p`
  margin: 3px;
`;