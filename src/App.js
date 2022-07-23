import React, { Component } from 'react';
import TaskComponent from './TaskComponent';
import SubmitComponent2 from './SubmitComponent2';

//are standard in-class component state but what’s inside the state varies by application
class App extends Component {
   
   constructor(props){
    super(props);
    //state is the data 
    this.state = {
      text: '',
      tasks:['walk the dog', 'finish homework'],
      
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    //console.log('sss');
   };

   //track changes in the text bar
   handleChange(event) {
    this.setState({text: event.target.value});
    //console.log(event.target.value);
   }
   
   handleSubmit(event) {
      this.setState({tasks:[...this.state.tasks, this.state.text]});
      this.setState({text:''});
   }

   handleDelete(id) {
      //make a shallow copy of state
     let copy = [...this.state.tasks];
     copy.splice(id, 1);
     this.setState({tasks:copy}); 
  }

  handleClick(event) {
    this.setState({text:''});
    document.getElementById("inputTask").value = "";
  }

   render () {
   
    return (
      <div>
      
      <SubmitComponent2 
      handleChange = {this.handleChange} 
      handleSubmit = {this.handleSubmit}
      handleClick = {this.handleClick}
      text={this.state.text} />
      {this.state.tasks.map((currTask, index) => ( <TaskComponent task = {currTask} id = {index} handleDelete = {this.handleDelete}/>))}
      </div>
    )
  }
};


export default App;