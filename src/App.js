import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import BaseTemplate from './templates/BaseTemplate';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <BaseTemplate/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
