import styled from 'styled-components';
import { testWrap } from '../utils/testWrap';

const BoxC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = testWrap(BoxC, 'box');
