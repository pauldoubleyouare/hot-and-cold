import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

ReactDOM.render(<App />, document.getElementById('root'));

/* 

0. A random number between 1-100 is used as the secret number
1. User enters a number into an input box
2. User clicks 'Guess' button
3. the guessing number gets saved to 'state'
4. The guessing number gets compared to the secret number - if correct {return WON} else {return 'incorrect}
5. Input box gets cleared out after each guess
6. when number is correctly guessed, user can start a new game




*/