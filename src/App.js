import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dogs" component={DogList} />
        <Route path="/dogs/:id" component={DogDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
