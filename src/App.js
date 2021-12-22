import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container my-5">
      <h4 className='text-center'>A Todo List App</h4>
      <div className="w-50 mx-auto my-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
