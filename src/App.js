import './App.css';
import './css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Products' element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
