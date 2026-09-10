import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/homePage/HomePage"

function App() {
  return (
    <>
      <Header />
      
      <main className="container mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
