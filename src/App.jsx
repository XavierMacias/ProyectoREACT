import './App.css'
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';
import AddCharacter from './components/AddCharacter/AddCharacter';
import AddAnime from './components/AddAnime/AddAnime';
import CharacterList from './components/CharacterList/CharacterList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters/:animeId" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/addcharacter/:animeId" element={<AddCharacter />} />
        <Route path="/addanime" element={<AddAnime />} />
      </Routes>
    </>
  )
}

export default App
