import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>📝 Список задач</h1>
      <TodoInput />
      <FilterBar />
      <TodoList />
    </div>
  );
}

export default App;
