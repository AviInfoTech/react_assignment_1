import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Multi from './multiplication'
import AddSub from './AddSub'

class App extends Component {
    constructor( props ){
        super( props )
        this.state = { show : false };
        
        this.toggleImage = this.toggleImage.bind(this)
        
    }
    
    toggleImage = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    
    render() {
        return (
          <div className="App">
            <div className="App-intro">
                <button onClick={ this.toggleImage }>Toggle Image</button>
                <br /><br />
                { this.state.show && <Box /> }
            </div>
            <Multi/>
            <AddSub/>
           
          </div>
        );
    }
}



export default App;