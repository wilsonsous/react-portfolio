import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Contact from './components/Contact';
// import { Switch, Route, Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <main className="page ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={Home} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
