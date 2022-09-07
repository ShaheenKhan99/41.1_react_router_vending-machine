import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Navbar from './Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>

          <Route exact path="/soda">
            <Soda />
          </Route>

          <Route exact path="/chips">
            <Chips />
          </Route>

          <Route exact path="/sardines">
            <Sardines />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>  
  );
}

export default App;
