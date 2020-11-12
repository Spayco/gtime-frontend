import { useState } from 'react';
import PropTypes from 'prop-types';
import github from '../assets/github.png';
import Menu from './Menu';

const Nav = ({ cookies }) => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <a href="https://github.com/Spayco/gtime-frontend" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
      <h2>GTime</h2>
      <button type="button" id="menu-bar" onClick={() => setMenu(menu === false)} style={{ transform: `rotate(${menu === false ? '0' : '90deg'})` }}>
        <i className="fas fa-bars" />
      </button>
      <div id="menu" style={{ right: menu === false ? '-250px' : '5px' }} cookies={cookies}>
        <Menu />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  cookies: PropTypes.func.isRequired,
};

export default Nav;
