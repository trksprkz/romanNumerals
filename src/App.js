
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Rnumerals from './components/Rnumerals';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/convert' element={<Rnumerals />} />
    </Routes>

  );
}

export default App;
