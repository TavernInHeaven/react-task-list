import Task from './Task';

const Tasks = ({ tasks, onDelete, onReminder }) => {
  //rac
  if (tasks.length === 0) return <h3>Hooray! No task here</h3>;
  tasks = tasks.sort((a, b) => (a.day > b.day ? 1 : -1));
  return (
    <ul>
      {tasks.map((t) => (
        <Task key={t.id} task={t} onDelete={onDelete} onReminder={onReminder} />
      ))}
    </ul>
  );
};

export default Tasks;
