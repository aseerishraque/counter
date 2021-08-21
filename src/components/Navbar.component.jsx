import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    Navbar <span className="badge bg-secondary text-white">{ this.props.nonZeroItems }</span>
                </a>
            </div>
        </nav>
    </>
         );
    }
}
 
export default Navbar;