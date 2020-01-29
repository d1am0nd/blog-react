import * as React from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
  overflow: auto;
  display: block;
`; 

interface IProps {
  children: string;
  renderHtml: boolean;
};

const Code: React.FunctionComponent<IProps> = ({
  children,
  renderHtml,
}) => (
  <pre>
    {renderHtml
      ? <StyledCode
        dangerouslySetInnerHTML={{__html: children}} />
      : <StyledCode>
        {children}
        </StyledCode>
    }
  </pre>
);

export default Code;
