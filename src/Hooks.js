import './App.css';
import React, { useState } from 'react';
export default function HooksExample() {
    const [counter, setCount] = useState(0);

    return (
        <div>
            <header className="App-header">
                The button is pressed: { counter } times.
                <button
                    onClick={() => setCount(counter + 1)}
                   className ='button'
                >
                    Click me!
                </button>
            </header>
        </div>
    )
}