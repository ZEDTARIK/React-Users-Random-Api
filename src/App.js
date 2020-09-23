import React from 'react';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
