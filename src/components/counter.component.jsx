import React, { Component } from "react";

class Counter extends Component {
 



  render() {
    return (
      <React.Fragment>
        <ul>
            <li class="list-unstyled">
            <div>
                <span class="badge bg-primary text-white">{this.props.value}</span>
                <button onClick={()=> this.props.onhandleIncrement(this.props.id)} type="button" class="btn btn-secondary m-2">
                +
                </button>
                <button onClick={()=> this.props.onhandleDecrement(this.props.id)} type="button" class="btn btn-secondary m-2">
                -
                </button>
                <button type="button" class="btn btn-danger m-2">
                Delete
                </button>
            </div>
            </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;