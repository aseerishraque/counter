import React, { Component } from 'react';
import Navbar from './Navbar.component';
import Counters from './counters.component';
import ResetBtn from './reset.component';

class App extends Component {
    state = { 
        counters: [
            {id:0, value:0},
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
     }
    handleReset = ()=> {
        const all_counters = this.state.counters.map((counter, idx)=>{
            const obj = {
                id: idx, value:0
            }
            return obj
        })
        this.setState({counters: all_counters})
    }
    handleDecrement = (id)=>{
        const counters = this.state.counters.map((counter, idx) => {
            if(counter.id === id) return {id: counter.id, value:counter.value-1}
            return counter
        })
        this.setState({counters: counters})
    }
    handleIncrement = (id)=>{
        const counters = this.state.counters.map((counter, idx) => {
            if(counter.id === id) return {id: counter.id, value:counter.value+1}
            return counter
        })
        this.setState({counters: counters})
    }
    nonZeroItems = ()=>{
        let cnt = 0;
        this.state.counters.forEach(counter=>{
            if(counter.value > 0) cnt++;
        })
        return cnt;
    }
    render() { 
        return ( 
            <>
                <Navbar nonZeroItems={this.nonZeroItems()}/>
                <ResetBtn onhandleReset={this.handleReset}/>
                <Counters 
                    counters={this.state.counters}
                    handleDecrement={this.handleDecrement}
                    handleIncrement={this.handleIncrement}
                />
            </>
         );
    }
}
 
export default App;