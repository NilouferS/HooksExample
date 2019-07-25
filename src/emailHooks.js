import './App.css';

import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');


  return (
    <div>
      <header className="App-header">
        
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
          <label>{
              email === confirmEmail ?
                "Great! Emails match" :
                "Oh! Emails do not match!"
          }</label>
        
      </header>
    </div>
  )
}

export default LoginForm;
