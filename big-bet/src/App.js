import './App.css';
import Main from './components/Main'
import Ranking from './components/Ranking'
import {BrowserRouter, Route, Routes } from "react-router-dom"


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


export default App;