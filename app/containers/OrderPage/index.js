/*
 *
 * OrderPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectOrderPage from './selectors';

export class OrderPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="OrderPage"
          meta={[
            { name: 'description', content: 'Description of OrderPage' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectOrderPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
