import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import{
BrowserRouter as Router,
Switch,
Link,
Route

} from 'react-router-dom'

import Home from './Components/Home/Home'
import World from './Components/Home/World';
import India from './Components/Home/India'


class App extends Component{

  render(){
  return (
    <div className="App">

<Router>
     


      <Switch>
<route exact path="/">
<Home/>

</route>

<route path="/world">
<World/>

</route>

<route path="/india">
<India/>

</route>

      </Switch>

      </Router>
    </div>
  );
}
}
export default App;
