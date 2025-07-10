import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <span
        onClick={() => dispatch(toggleTodo(id))}
        className={completed ? 'completed' : ''}
      >
        {text}
      </span>
      <button onClick={() => dispatch(deleteTodo(id))}>×</button>
    </li>
  );
}
