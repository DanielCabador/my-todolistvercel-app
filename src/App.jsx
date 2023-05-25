import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      {tasks.length > 0 ? (
        <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default App;




