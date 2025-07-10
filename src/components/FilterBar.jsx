import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/todosSlice';

export default function FilterBar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter-bar">
      <label htmlFor="filter-select">Фильтр:</label>
      <select id="filter-select" value={filter} onChange={handleChange}>
        <option value="all">Все</option>
        <option value="active">Активные</option>
        <option value="completed">Завершённые</option>
      </select>
    </div>
  );
}
