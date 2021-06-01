import React, { Component } from 'react';



class multiplication extends Component{
    constructor( props ){
        super( props )
        this.state = { data: []};
        this.multiply = this.multiply.bind(this)
        
    }
    
    multiply = () => {
        const arr=[];
        const number = parseInt(prompt('Enter a Number for table: '));
        const range = parseInt(prompt('Enter a range: '));
        for(let i = 1; i <= range; i++) {
            const result = i * number;
            console.log((`${number} * ${i} = ${result}`));
            arr[i]=+number +"x"+i+"="+number*i +",";      
        } 
        this.setState( { data : arr} ) 
    }
    render(){
        return(
            <div>
                <div id="table">
                { this.state.data && this.state.data.map((c) => <div>{c}</div>)}

                </div>
                <button onClick={ this.multiply }>Multiplication</button>
                <br /><br />
            </div>
        )
    }
}
export default multiplication;