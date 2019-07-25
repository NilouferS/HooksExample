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
                     onClick={() => whatHooks(<h3>Hooks are a new addition in React 16.8. <br/>
                        They let you use state and other React features without writing a class. </h3>)}
                   className ='button'>
                    Click me!
                </button>
            <h1>WHY WERE HOOKS INTRODUCED ???????</h1>
            
                <button
                     onClick={() => whyHooks('HOOKS')}
                   className ='button'>
                    Click me!
                </button>
               {value1 === 'HOOKS' ?
                        <p><i>**Complex forms can become much simpler without the use of other form libraries.<br/>
                        **Hooks make it possible to organize logic in components, making it small and reusable without writing a class.<br/>
                        **Instead of abstracting components in various ways, like higher-order components, 
                        we can call and manage flow inside of a component.</i> </p> :
                        ''}
            <h1>HOW DO HOOKS WORK</h1>
            
                <button
                     onClick={() => howHooks('work')}
                   className ='button'>
                    Click me!
                </button>
               {value2 === 'work' ?
                    <p><b>const [ someState, updateState ] = useState(initialState)</b><br/>
                        <br/>Let’s break this down:
                        <br/><b>someState:</b> lets you access the current state variable.
                        <br/><b>updateState:</b> function that allows you to update the state — whatever you pass into it becomes the new someState
                        <br/><b>initialState:</b> what you want someState to be upon initial render
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

