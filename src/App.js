import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jedi: []
    }
  }
  componentDidMount(){
    console.log("mounts")
    axios.get('http://localhost:3000/api/getJedi')
      .then(response=>{
        this.setState({jedi: response.data.results})
      })
      .catch(console.log)
  }
  render() {
    const people = this.state.jedi.map(cur => (<div>{cur.name}</div>))
    return (
      <div className="App">
        {people}
      </div>
    );
  }
}

export default App;
