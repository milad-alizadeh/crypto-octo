import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { LineChart, Button, Text } from 'components';

export const HistoricalChartStyled = styled.div``;

export const LineChartStyled = styled(LineChart)``;

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;

  ${breakpoint('medium')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const LoadingContainer = styled.div`
  z-index: 2;
`;

export const Content = styled.div`
  padding-top: 2rem;
  height: 28rem;
  position: relative;

  > div {
    height: 100%;
  }

  ${LineChartStyled} {
    height: 100%;
    width: 100%;
  }

  ${LoadingContainer} {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${breakpoint('medium')`
    height: 50rem;
  `}
`;

export const ControlsWrapper = styled.div`
  max-width: 100%;
  margin-bottom: auto;
`;

export const Contorls = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style:
  -ms-autohiding-scrollbar;
`;

export const ButtonStyled = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;
  flex: 0 0 auto;

  &:last-child {
    margin-right: 0;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  ${breakpoint('medium')`
    align-items: flex-start;
    margin-bottom: 0;
  `}
`;

export const HoveredTime = styled(Text)`
  margin-bottom: 1rem;
`;


export const HoveredPrice = styled(Text)``;
