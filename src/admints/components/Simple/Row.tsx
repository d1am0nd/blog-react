import * as React from 'react';
import {Link} from 'react-router-dom';

const inlineBlock = () => ({
  'display': 'inline-block',
});

const ul = () => ({
  'paddingLeft': '0',
});

const li = () => ({
  'marginRight': '5px',
  'display': 'inline-block',
});

interface IProps {
  handleDelete?: (e: React.MouseEvent) => void;
  editUrl: string;
  text: string;
};

const Row: React.FC<IProps> = ({
  handleDelete,
  editUrl,
  text,
}) => (
  <div>
    <div style={inlineBlock()}>
      <ul style={ul()}>
        <li style={li()}>
          <Link to={editUrl}>
            Edit
          </Link>
        </li>
        <li style={li()}>
          <a href="javascript:;" onClick={handleDelete}>
            Delete
          </a>
        </li>
      </ul>
    </div>
    <div style={inlineBlock()}>
      - {text}
    </div>
  </div>
);

export default Row;
