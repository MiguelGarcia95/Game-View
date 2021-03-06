import styled from "styled-components";
import {slideInLeft, slideOutRight} from './pageTransitions';

export const OverflowPage = styled.div`
width: 100vw;
max-width: 100%;
min-height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
color: white;
overflow: auto;

h1 {
  font-weight: 300;
  color: white;
}

h2 {
  font-weight: 400;
}
p {
  font-size: 1rem;
  margin: 20px auto;
}
`;

export const Page = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;