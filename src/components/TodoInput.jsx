import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { useState } from 'react';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
