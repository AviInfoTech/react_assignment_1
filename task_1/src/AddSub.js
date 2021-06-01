import React, { Component } from 'react';

class AddSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  IncrementItem = () => {
    if(this.state.clicks<10){
    this.setState({ clicks: this.state.clicks + 1 });
    }else
    alert("Can't increament the value  more than 10: Acces Denied")
  }
  DecreaseItem = () => {
    if(this.state.clicks>0){
    this.setState({ clicks: this.state.clicks - 1 });
    }else
    alert("Can't decrement the value less than 0: Acces Denied")
  }
  

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increment</button>
        <button onClick={this.DecreaseItem}>Click to decrease</button>
        <h2>{ this.state.clicks }</h2>
       
      </div>
    );
  }
}

export default AddSub;