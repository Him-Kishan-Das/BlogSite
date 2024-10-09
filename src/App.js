import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogPost from './components/BlogPage/BlogPost';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from './data/data';
import FullPost from './components/FullPost/FullPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <Home blog={data}  />
          } />

          <Route path='/BlogPost' element={
            <BlogPost />
          } />

          <Route path='/FullPost' element={
            <FullPost blogPost = {data}  />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
