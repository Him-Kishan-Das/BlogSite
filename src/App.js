import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogPost from './components/BlogPage/BlogPost';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <Home />
          } />

          <Route path='/BlogPost' element={
            <BlogPost />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
