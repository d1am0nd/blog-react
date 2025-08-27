import * as React from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import {transition, color1, color2, color3} from '../misc/styles';

const Ul = styled.ul`
  font-size: 20px;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
`;

const Li = styled.li`
  transition: ${transition};
  font-size: 20px;
  margin-right: 20px;
  display: inline-block;
  border-bottom: 1px solid ${({selected}: {selected: boolean}) => selected ? color2 : color3};
  &:hover {
    border-bottom: 1px solid ${color1};
  }
`;

const NavLink = styled(Link)`
  color: ${color2};
  text-decoration: none;
`;

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

const Nav: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <Ul>
      {tabs.map(({url, name}) => (
        <Li key={url} selected={location.pathname === url}>
          <NavLink to={url}>
            {name}
          </NavLink>
        </Li>
      ))}
    </Ul>
  );
};

export default Nav;
