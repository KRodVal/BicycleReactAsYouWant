import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import Main from './pages/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/helloWorld" element={<HelloWorld />}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;