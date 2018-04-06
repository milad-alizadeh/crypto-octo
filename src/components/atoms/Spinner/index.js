import React from 'react';
import styled, { keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactDelayRender from 'react-delay-render';

const Circle1 = styled.div``;
const Circle2 = styled.div``;

const spinnerBounce = keyframes`{
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    opacity: 0;
    transform: scale(1.0);
  }
}`;

const SpinnerStyled = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;

  ${breakpoint('medium')`
    width: 4rem;
    height: 4rem;
  `}

  ${Circle1}, ${Circle2} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${spinnerBounce} 2s infinite ease-in-out;
  }

  ${Circle2} {
    animation-delay: -1s;
}
`;

const Spinner = props => (
  <SpinnerStyled {...props}>
    <Circle1 />
    <Circle2 />
  </SpinnerStyled>
);

export default ReactDelayRender({ delay: 300 })(Spinner);
