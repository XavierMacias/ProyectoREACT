import './App.css'
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';
import AddCharacter from './components/AddCharacter/AddCharacter';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/addcharacter/:animeId" element={<AddCharacter />} />
      </Routes>
    </>
  )
}

export default App
