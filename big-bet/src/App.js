import './App.css';
import Main from './components/Main'
import Ranking from './components/Ranking'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
  </BrowserRouter>
  )
};

const AppWrapper = () => {
  if (store) {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
  } else {
      return (
          <App/>
      );
  }
  };


export default AppWrapper;