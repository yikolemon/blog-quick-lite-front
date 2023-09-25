import Navigation from './components/navigation';
import './assets/scss/base.scss'
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';
import NotFound from './pages/not-found';
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {

  const user = {
    firstName: 'yiko',
    lastName: 'fuck'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
