import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a
            href="#what"
            className="what"
            aria-label="how to play"
          >
            what am I even doing?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="start a new game"
            onClick={() => props.onRestartGame()}
          >
            new game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}