import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';
import NotFound from './components/NotFound';
import { useState } from 'react';
import Error from './components/Error';
import Parent from './components/Parent';

function App() {
  const [error, setError] = useState(null);
  return (
    <div className="App">
      {/* <Parent error="Something went wrong">
        <h3>yum yum I&quot;m hungry</h3>
      </Parent>
      <Parent error="Something went wrong">
        <h3>hello world</h3>
      </Parent> */}
      <Error />
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
