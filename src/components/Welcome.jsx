import React from 'react';
// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>Meet the { this.props.name }</h1>;
//    }
// }

const Welcome = (props) => {
  return <h1>Meet the <i>{props.name}</i></h1>
}

export default Welcome;