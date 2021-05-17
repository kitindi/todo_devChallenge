import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AllTasks from './components/AllTasks';
import Active from './components/Active'
import Completed from './components/Completed'

function App() {
  return (
    <div className="App">
      <Router>
      <h1>#todo</h1>
      <div className="tasks-bar">
        <p><Link to="/" style={{textDecoration:"none", color:"#333"}}>All</Link></p>
        <p><Link to="/active" style={{textDecoration:"none", color:"#333"}}>Active</Link></p>
        <p><Link to="/completed" style={{textDecoration:"none", color:"#333"}}>Completed</Link></p>
      </div>
     <Switch>
       <Route path="/" exact component={AllTasks}/>
        <Route path="/active" component={Active}/>
         <Route path="/completed" component={Completed}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
