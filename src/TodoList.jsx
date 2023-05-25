import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;


