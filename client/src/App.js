import React from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';

function App() {

  let items= [];

  for(let i=0; i<10; i++){
    items.push(<Result/>);
  }

  return (
    <div className="content">
      <div className="header">
        <Form/>
      </div>
      <div className="results">
        {items}
      </div>
    </div>
  );
}

export default App;
