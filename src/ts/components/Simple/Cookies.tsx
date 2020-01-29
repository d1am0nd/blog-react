import * as React from 'react';
import styled from 'styled-components';
import {
  baseWidth,
  transition,
  darkBackground,
  lightBackground,
} from '../../misc/styles';

const FixedWrapper = styled.div`
  transition: ${transition};
  background-color: ${lightBackground};
  opacity: ${({show}: {show: boolean}) => show ? 1 : 0};
  position: fixed;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const RelativeWrapper = styled.div`
  width: ${baseWidth};
  max-width: 100%;
  position: relative;
  margin: auto;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
`;
const DismissButton = styled.button`
  background-color: ${darkBackground};
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  &:focus {
    border: none;
  }
`;

interface IProps {
  display: boolean;
  handleDismiss: () => void;
};

const Cookies: React.FunctionComponent<IProps> = ({
  display,
  handleDismiss,
}) => (
  <FixedWrapper show={display}>
    <RelativeWrapper>
      <Left>
        This website uses &nbsp;
        <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
          Google Analytics
        </a>
        &nbsp; cookies. Beware.
      </Left>
      <Right>
        <DismissButton
          onClick={() => handleDismiss()}>
          Dismiss
        </DismissButton>
      </Right>
    </RelativeWrapper>
  </FixedWrapper>
);

export default Cookies;
