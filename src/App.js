import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Route path="/dogs" component={DogList} />
      <Route path="/dogs/:id" component={DogDetail} />
    </div>
  );
}

export default App;
