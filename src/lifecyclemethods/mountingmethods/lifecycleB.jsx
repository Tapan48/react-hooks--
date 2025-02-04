import React, { Component } from "react";

export class liefcycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tapan",
    };
    console.log("lifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }

  render() {
    console.log("lifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default liefcycleB;
