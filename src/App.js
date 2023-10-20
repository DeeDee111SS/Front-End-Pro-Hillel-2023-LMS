import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <TodoBox/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
