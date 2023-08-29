import './App.css'
import Greeting from './Greeting'
import List from './List'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {

  return (
    <div >
      <Router>
        <div style={{display: "flex", flexDirection:"column",justifyContent:"space-between"}}>
        <Navbar/>
        <Routes>
          <Route exact path='/Greeting' element={<Greeting />} />
          <Route path='/List' element={<List />} />
        </Routes>
        <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App;
