'use client';

import React from "react";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current) {
     // @ts-ignore
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    // @ts-ignore
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
