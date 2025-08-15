
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Project from './pages/projectsPage';
import Contact from './pages/contactPage';

function App() {
  return (
<BrowserRouter>
  <Routes>
    {/* Public Pages Layout */}
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/work' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
