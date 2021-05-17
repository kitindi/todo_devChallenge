import './App.css';
import AllTasks from './components/AllTasks';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="tasks-bar">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <AllTasks/>
    </div>
  );
}

export default App;
