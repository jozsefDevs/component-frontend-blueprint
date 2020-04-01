import React from 'react';
import { Counter } from "./Counter";
import { Hello } from "./Hello";

export function App() {
    return (
        <div className="App">
            <Hello name={ 'react-webpack-typescript-babel' } />
            <Counter />
        </div>
    );
}

