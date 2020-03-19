import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, children, favoritNumber }) => {
//   return (
//     <div>
//       hi {name}
//       <br />
//       hi {children}
//       <br />
//       hi {favoritNumber}
//     </div>
//   );
// };

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoritNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoritNumber, children } = this.props;
    return (
      <div>
        {name}
        <br />
        {favoritNumber}
        <br />
        {children}
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본이름'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoritNumber: PropTypes.number.isRequired
// };

export default MyComponent;
