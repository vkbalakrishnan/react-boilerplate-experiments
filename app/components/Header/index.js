import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import request from 'utils/request';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
  }

  componentWillReceiveProps(nextProps) {
    const q = [
    { q : 1, valid: "function(state) {console.log(state)}" }
    ];
    var jsonq = JSON.stringify(q);
    console.log(_.map(JSON.parse(jsonq), function(q) {
      console.log(q.valid);
      q.valid = eval(q.valid);
      console.log(q);
      return q;
    }));
    console.log('nextprops', nextProps, this.props);  
    request('http://localhost:3099/questions.json').then( (data) => {
      console.log(data);
      return data;
    }

    )
  }

  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <p></p>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
