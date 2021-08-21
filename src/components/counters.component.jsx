import React, { Component } from 'react';
import Counter from './counter.component';
class Counters extends Component {
   
    render() { 
        return (
            this.props.counters.map(counter=>{
                return <Counter 
                        key={counter.id}
                        value={counter.value}
                        id={counter.id}
                        onhandleIncrement={this.props.handleIncrement}
                        onhandleDecrement={this.props.handleDecrement}/>
            })
         );
    }
}
 
export default Counters;