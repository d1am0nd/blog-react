import * as React from 'react';
import {
  Link,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import {transition, color2, color3} from '../misc/styles';

const ulStyle = () => ({
  'fontSize': '20px',
  'listStyleType': 'none',
  'marginTop': 0,
  'marginBottom': '10px',
  'padding': 0,
});

const liStyle = (selected = false) => ({
  ...transition,
  'fontSize': '20px',
  'marginRight': '20px',
  'display': 'inline-block',
  'borderBottom': `1px solid ${selected ? color2 : color3}`,
  ':hover': {
    'borderBottom': `1px solid black`,
  },
});

const linkStyle = () => ({
  'color': color2,
  'textDecoration': 'none',
});

interface ITab {
  url: string;
  name: string;
};

const tabs: Array<ITab> = [
  {
    url: `/`,
    name: 'Home',
  },
  {
    url: `/about-me`,
    name: 'About me',
  },
  {
    url: `/my-projects`,
    name: 'Projects',
  },
];

const Nav: React.FunctionComponent<RouteComponentProps> = ({
  location,
}) => (
  <ul style={ulStyle()}>
    {tabs.map(({url, name}) => (
      <li
        key={url}
        style={liStyle(location.pathname === url)}>
        <Link to={url} style={linkStyle()}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(Nav);
