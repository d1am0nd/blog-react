import * as React from 'react';
import {transition} from '../../misc/styles';

const titleStyle = () => ({
  'fontSize': '22px',
  'marginTop': 0,
  'marginBottom': '5px',
  'padding': 0,
});

const ulStyle = () => ({
  'fontSize': '20px',
  'listStyleType': 'none',
  'marginTop': 0,
  'marginBottom': '20px',
  'padding': 0,
});

const liStyle = () => ({
  ...transition,
  'fontSize': '20px',
  'marginRight': '20px',
  'display': 'inline-block',
});

const linkStyle = () => ({
  'textDecoration': 'none',
});

interface ILink {
  name: string;
  url: string;
};

interface IProps {
  links: Array<ILink>;
};

const Social: React.FunctionComponent<IProps> = ({
  links,
}) => (
  <>
    <div style={titleStyle()}>
      Public profiles
    </div>
    <ul style={ulStyle()}>
      {links.map(({name, url}, i) => (
        <li key={i} style={liStyle()}>
          <a
            style={linkStyle()}
            target="_blank"
            rel="noopener noreferrer"
            href={url}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default Social;
