import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CharactersPage from './pages/charactersPage/CharactersPage';
import HomePage from './pages/homePage/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="container mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
