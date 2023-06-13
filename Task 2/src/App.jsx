import React, { useState } from "react";
import TaskForm from "./components/TaskList";
import TaskList from "./components/TaskFrom";
import './App.css'



const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="bg-purple-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">To Do List</h1>
        <p className="text-lg mb-8">
        Stay Organized, Achieve Priorities: Your Ultimate Priority-Based To-Do List
        </p>
        <TaskForm onAddTask={addTask}/>
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;

