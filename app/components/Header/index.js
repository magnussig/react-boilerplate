import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './tempo.png';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="https://www.tempo.io/jira-project-management-tool">
          <Img src={Banner} alt="Tempo - Logo" />
        </A>
      </div>
    );
  }
}

export default Header;
