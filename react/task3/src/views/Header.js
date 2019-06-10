import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/about'>о нас</Link></li>
        <li><Link to='/counters'>счетчики</Link></li>
      </ul>
    </nav>
  </header>
)

  export default Header;