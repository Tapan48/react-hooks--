import React, { Component } from "react";
import LifecycleB from "./lifecycleB";

// mounting phase methods are called when an instance of a component is being created and inserted into the DOM

// mounting phase has following  lifecycle methods
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// order of execution of mounting phase methods
// constructor -> getDerivedStateFromProps -> render -> componentDidMount

/// constructor is the first method that is called when the component is mounted
/// it is used to initialize the state and props
/// it is called only once

/// getDerivedStateFromProps is a static method that is called every time a component is rendered
/// it is used to update the state based on the props
/// it is called only once

/// render is a method that is called when the component is mounted
/// it is used to return the jsx that is to be rendered
/// it is called only once

/// componentDidMount is a method that is called when the component and its children are    mounted
/// it is used to perform any side effects
/// it is called only once

export class lifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tapan",
    };
    console.log("lifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB />
      </div>
    );
  }
}

export default lifecycleA;
