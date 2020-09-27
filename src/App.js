import React, {Component} from "react";
import './App.css';
import Joke from "./joke";
import "tachyons";




class App extends Component {

  constructor() {
    super()
    this.state =  {
      joke: ""
    }
  }

  newJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(resp => resp.json())
    .then(answer => {this.setState({joke: answer.value})});
  }

  componentDidMount() {
    this.newJoke();
  }


    render() {
      return <div>
        {/* <h1>{this.state.joke}</h1> */}
        <Joke joke={this.state.joke}/>
        <button onClick={this.newJoke}>new joke</button>
        {/* <NextQuote joke={this.newJoke}/> */}
      </div>
    }


}

export default App;
