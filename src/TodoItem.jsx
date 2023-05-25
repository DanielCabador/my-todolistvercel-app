import React from 'react';

const TodoItem = ({ task, completeTask, deleteTask }) => {
  const { id, title, completed } = task;

  const handleComplete = () => {
    completeTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <span>{title}</span>
      <div>
        <button onClick={handleComplete}>{completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

