import { Switch, Route } from 'react-router-dom';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Home} from './components/Home';
import {Error} from './components/Error';
import {Layout} from './components/Layout/Layout'
function App() {
  return (
      <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      </Layout>
  );
}

export default App;
