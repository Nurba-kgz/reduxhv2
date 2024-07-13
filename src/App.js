import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserCard from './UserCard';

function App() {
  return (
      <Provider store={store}>
    <div className="App">
        <UserCard userId={1} /> {/* Пример передачи userId */}
    </div>
      </Provider>
  );
}

export default App;
