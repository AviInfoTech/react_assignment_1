import React, { Component } from 'react';
import image from './assets/home.png';


class Box extends Component{
    render(){
        return(
            <div>
               <img src={image}/>
            </div>
        )
    }
}
export default Box;