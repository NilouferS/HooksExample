 import './App.css';
import React, {useState} from 'react';

export default function Intro() {
    const [value, whatHooks] = useState('');
    const [value1, whyHooks] = useState('');
    const [value2, howHooks] = useState('');

    return (
        <div>
            <header className="App-header">
            <h1>WHAT ARE HOOKS ???????</h1>
            {value}
                <button
                     onClick={() => whatHooks(<p>Hooks are a new addition in React 16.8. 
                        They let you use state and other React features without writing a class. </p>)}
                   className ='button'>
                    Click me!
                </button>
            <h1>WHY WERE HOOKS INTRODUCED ???????</h1>
            {value1}
                <button
                     onClick={() => whyHooks('HOOKS')}
                   className ='button'>
                    Click me!
                </button>
               {value1 === 'HOOKS' ?
                        <p>**Complex forms can become much simpler without the use of other form libraries.<br/>
                        **Hooks make it possible to organize logic in components, making them tiny and reusable without writing a class.<br/>
                        **Instead of abstracting components in various ways, like higher-order components, we can call and manage flow inside of a component. </p> :
                        ''}
            <h1>HOW DO HOOKS WORK</h1>
            {value1}
                <button
                     onClick={() => howHooks('work')}
                   className ='button'>
                    Click me!
                </button>
               {value2 === 'work' ?
                    <p>const [ someState, updateState ] = useState(initialState)<br/>
                        <br/>Let’s break this down:
                        <br/>someState: lets you access the current state variable.
                        <br/>updateState: function that allows you to update the state — whatever you pass into it becomes the new someState
                        <br/>initialState: what you want someState to be upon initial render
                    </p> :
                        ''}
            </header>
        </div>
    )
}
//     return(
//         <div>
            
//             <button
                   
//                    className ='button'
//                 >click me</button>
//             
//             <h1>HOW DO HOOKS WORK</h1>
//         </div>
//     );
// }

