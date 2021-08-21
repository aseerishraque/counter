import React, { Component } from 'react';
class ResetBtn extends Component {
    state = {  }
    render() { 
        return ( 
            <>
              <button onClick={this.props.onhandleReset} type="button" className="btn btn-primary m-4">Reset</button>
            </>
         );
    }
}
 
export default ResetBtn;