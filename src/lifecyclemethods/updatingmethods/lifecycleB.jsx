import React, { Component } from "react";

export class    lifecycleBupdate extends Component {
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

  shouldComponentUpdate() {
    console.log("lifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    /////   this is a mounting phase method but it is not called when the component is updated
    console.log("lifecycleB componentDidMount");
  }

  componentDidUpdate() {
    console.log("lifecycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycleB render");
    return (
      <div>
        <div>Lifecycle B</div>
      </div>
    );
  }
}

export default lifecycleBupdate;
