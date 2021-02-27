import { Switch, Route } from 'react-router-dom';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Home} from './components/Home';
import {Error} from './components/Error';
import {Navbar} from './components/Layout/Navbar'
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
