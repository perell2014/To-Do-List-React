import React, { Component } from 'react';
//import { useReducer } from 'react';

class SubmitComponent2 extends Component {

   render () {
     return (
       <div>
        <input id={"inputTask"} placeholder='enter text' type='text' onChange = {this.props.handleChange} />
        <button onClick = {this.props.handleSubmit}>Submit</button>
        <button onClick = {this.props.handleClick}>Clean</button>
        <h1>{this.props.text}</h1>
       </div>
     )
   }

};

export default SubmitComponent2;