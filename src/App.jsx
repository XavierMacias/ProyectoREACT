import './App.css'
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  )
}

export default App
