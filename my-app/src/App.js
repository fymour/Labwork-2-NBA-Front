import Header from './components/Header/header'

import Home from './pages/Home/home'
import About from './pages/About/about'
import Signup from './pages/Signup/sign'

import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup/" element={<Signup/>}/>
       </Routes>
      </div>
      
  );
}

export default App;
