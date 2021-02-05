import './App.css';
import Authorization from './components/Authorization/Authorization'
import Main from './containers/Main'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/auth' component={Authorization}/>
      <Route path='/' component={Main}/>
    </Switch>
  );
}

export default App;
