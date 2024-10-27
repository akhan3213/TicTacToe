import React from 'react';
import Game from './components/Game';
import './App.css'; // You can add styling here

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Game />
        </div>
    );
};

export default App;
