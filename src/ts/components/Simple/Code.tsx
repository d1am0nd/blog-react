import * as React from 'react';

const codeStyle = () => ({
  'overflow': 'auto',
  'display': 'block',
});

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
      ? <code
        style={codeStyle()}
        dangerouslySetInnerHTML={{__html: children}} />
      : <code
        style={codeStyle()}>
        {children}
      </code>}
  </pre>
);

export default Code;
