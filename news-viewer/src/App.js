import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

//724f88c9764345ab83fcca9f31b1e4b7
const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};
export default App;
