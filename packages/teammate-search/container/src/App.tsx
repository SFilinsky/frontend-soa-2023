import React, {useState} from 'react';
import './App.css';

import IntegrateModule from "./modules/IntegrateModule";

function App() {

  const [ isAuthIntegrated, setIsAuthIntegrated ] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Container
        <button onClick={() => setIsAuthIntegrated(true)}>Integrate Auth</button>
        { isAuthIntegrated && <IntegrateModule submoduleName="auth"/>}
      </header>
    </div>
  );
}

export default App;
