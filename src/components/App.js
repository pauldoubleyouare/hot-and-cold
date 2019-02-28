import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'make your guess!',
			auralStatus: '',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		};
	}

	restartGame() {
		this.setState({
			guesses: [],
			feedback: 'make your guess!',
			auralStatus: '',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		});
	}

	makeGuess(guess) {
		guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({ feedback: '...we both know that is not a valid number' });
			return;
		}

		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if (difference >= 50) {
			feedback = "you're as cold as ice";
		} else if (difference >= 30) {
			feedback = "you're still pretty cold...";
		} else if (difference >= 10) {
			feedback = "warmin' up!";
		} else if (difference >= 1) {
			feedback = "you're on FIRE";
		} else {
			feedback = 'NAILED IT!!!';
		}

		this.setState({
			feedback,
			guesses: [ ...this.state.guesses, guess ]
		});

		document.title = feedback ? `${feedback} | hot or cold` : 'hot or cold';
	}

	generateAuralUpdate() {
    const { guesses, feedback } = this.state;

    const pluralize = guesses.length !== 1;

    let auralStatus = `here's the status of the game right now: ${feedback} you've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'in order of most to least recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    this.setState({ auralStatus });
  }

	render() {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

		return (
			<div>
				<Header 
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection 
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection 
            guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
			</div>
		);
	}
}

/* LIST OF COMPONENTS TO MAKE
0. nav bar (what? and newgame)
1. header/title (hot or cold)
2. feedback (hot / getting hotter etc.)
3. guess input
4. guess button
5. counter
6. display history of guesses 



*/
