import './App.css'
import Greeting from './Greeting'
import List from './List'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Greeting />} />
          <Route path='/about' element={<List />} />
        </Routes>
      </Router>
      <div className="sup">Was poppin y&apos;all</div>
      <Greeting />
      <Footer/>
    </>
  )
}

export default App;
