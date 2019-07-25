import React, { useState } from 'react';
import './App.css'
export default function Hooks() {
    const [counter, setCount] = useState(0);
    return (
        <div>
            <header className="App-header">
                The button is pressed: {counter} times.
                  <button
                    onClick={() => setCount(counter + 1)}
                    className='button'>

                    Click me!
                  </button>
            </header>
        </div>
    );
}

// import React, {Component} from 'react';
// import './App.css';
// import Intro from './Intro';
// export default class WithoutHooks extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           counter: 0
//       }
//   }
//   buttonClick(){
//     this.setState({counter: this.state.counter + 1});
//   }
//   render() {
//       const { counter } = this.state;
//       return (
//           <div>
//               <header className="App-header">
//                   The button is pressed: { counter } times.
//                   <button
//                       onClick={() => this.buttonClick() }
//                       className='button'>

//                       Click me!
//                   </button>
//               </header>
//               <Intro></Intro>
//           </div>
//       )	
//   }
// }



// const [ someState, updateState ] = useState(initialState)

// Let’s break this down:

// someState: lets you access the current state variable, someState
// updateState: function that allows you to update the state — whatever you pass into it becomes the new someState
// initialState: what you want someState to be upon initial render