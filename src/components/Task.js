import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onReminder(task.id)}>
      <h3>
        {task.text.toUpperCase()}{' '}
        <FaTimes
          style={{ color: 'darkgreen', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
