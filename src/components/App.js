import React from 'react'
import GuessForm from './GuessForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: {}
    }
  }

  // Random number 
  // const secretNumber = Math.floor(Math.random() * 100) + 1; 

  render() {
    return (
      <div>
        <GuessForm />
      
      </div>

    );
  }

}

export default App;