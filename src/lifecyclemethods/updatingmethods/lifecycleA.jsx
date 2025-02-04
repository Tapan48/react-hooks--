import React, { Component } from "react";
import LifecycleBupdate from "./lifecycleB";

//updating phase methods are called when a component is updated(re-rendered)
//as a result of state changes or props changes

//updating phase has following 5 lifecycle methods
//getDerivedStateFromProps
//shouldComponentUpdate
//render
//getSnapshotBeforeUpdate
//componentDidUpdate

//order of execution of updating phase methods
//getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

//getDerivedStateFromProps is a static method that is called every time a component is rendered
//it is used to update the state based on the props
//it is called only once

//shouldComponentUpdate is a method that is called before the component is re-rendered
//it is used to return a boolean value to determine if the component should be re-rendered
//it is called only once

//render is a method that is called when the component is re-rendered
//it is used to return the jsx that is to be rendered
//it is called only once

//getSnapshotBeforeUpdate is a method that is called before the component is re-rendered
//it is used to return a value that is passed to componentDidUpdate
//it is called only once

//componentDidUpdate is a method that is called after the component is re-rendered
//it is used to perform any side effects
//it is called only once

export class lifecycleAupdate extends Component {
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

  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    /////   this is a mounting phase method but it is not called when the component is updated
    console.log("lifecycleA componentDidMount");
  }

  componentDidUpdate() {
    console.log("lifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "tapan great",
    });
  };

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleBupdate />
      </div>
    );
  }
}

export default lifecycleAupdate;
