import Navigation from './components/navigation';
import './assets/scss/base.scss'
import Home from './pages/home';
import Blog from './pages/blog';
import ContactMe from './pages/contact-me';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contact-me' exact component={ContactMe} />
          <Route path='/login' exact component={Login} />
          <Route path='/' render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
