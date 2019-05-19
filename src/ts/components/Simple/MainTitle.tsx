import * as React from 'react';
import {Link} from 'react-router-dom';
import {color1, color2} from '../../misc/styles';

const linkStyle = () => ({
  'color': 'inherit',
  'textDecoration': 'none',
  ':visited': {
    color: color2,
    textDecoration: 'none',
  },
});

const containerStyle = () => ({
  'fontSize': '30px',
  'color': color1,
});

interface IProps {
  children: React.ReactNode;
};

const MainTitle = ({children}: IProps) => (
  <div style={containerStyle()}>
    <Link to={'/'} style={linkStyle()}>
      {children}
    </Link>
  </div>
);

export default MainTitle;
