import React from 'react';
import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <Todos></Todos>
    </div>
  );
};

export default App;
