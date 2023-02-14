import './App.css';
import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import Overview from './components/Overview';


class App extends Component {


  constructor(){

    super();
    this.state = {

      tasks: [],
      input: "",
      count: 0

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }



  handleSubmit(e){

    e.preventDefault(); // dont reload
    const task = { text: this.state.input, id: this.state.count};

    this.setState({

      count: this.state.count + 1,
      tasks: this.state.tasks.concat(task),
      input: ""

    });

    
  }

  handleChange(e){

    const c = e.target.value;

    this.setState({

      input: c

    });

  }

  render(){

    return (
      <div>
        <form >
          <label htmlFor="task">Task:</label><br/>
          <input type="text" id="task" name="tasks" value={this.state.input} onChange={this.handleChange}/><br/>
          <button onClick={ this.handleSubmit }>Submit</button>
        </form>
        <Overview List={ this.state.tasks }/>
      </div>
    );
  }
}




// class App extends Component {

//   constructor(){

//     super();

//     this.state = {

//       count: 0,

//     };

//     this.countUp = this.countUp.bind(this);

//   }

//   countUp(){

//     this.setState({

//       count: this.state.count+1,
//     });

//   }

//   render(){

//     const {count} = this.state;

//     return (

//       <div>
//        <div>{count}</div>
//        <button onClick={this.countUp}> ++ </button>
//       </div>
//     );
//   }
// }


// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
