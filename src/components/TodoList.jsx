import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { items, filter } = useSelector((state) => state.todos);

  const filteredTodos = items.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // all
  });

  if (!filteredTodos.length) return <p className="empty">Нет задач</p>;

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
