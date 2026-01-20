import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from './components/Header'
import PokemonList from './pages/PokemonList'
import PokemonForm from './pages/PokemonForm'
import Login from './pages/Login'
import TrainerList from './pages/TrainerList'
import TrainerForm from './pages/TrainerForm'
import './App.css'

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/add-pokemon' element={<PokemonForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/trainers' element={<TrainerList />} />
            <Route path='/add-trainer' element={<TrainerForm />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App