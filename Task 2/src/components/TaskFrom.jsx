import React, { useState } from "react";
import './component.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updatePriority = (taskId, newPriority) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, priority: newPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const decreasePriority = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newPriority = task.priority - 1 >= 0 ? task.priority - 1 : 0;
        return { ...task, priority: newPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const increasePriority = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newPriority = task.priority + 1;
        return { ...task, priority: newPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <ul>
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onUpdatePriority={updatePriority}
            onDecreasePriority={decreasePriority}
            onIncreasePriority={increasePriority}
          />
        ))}
      </ul>
    </div>
  );
};

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAddTask({ id: Date.now(), text: task, priority: priority });
      setTask("");
      setPriority(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        required={true}
        className="br"
      />
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
        placeholder="Set a priority"
        required={true}
        className="br"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const Task = ({
  task,
  onDeleteTask,
  onUpdatePriority,
  onDecreasePriority,
  onIncreasePriority,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handlePriorityChange = (e) => {
    const newPriority = parseInt(e.target.value);
    onUpdatePriority(task.id, newPriority);
  };

  const handleDecreasePriority = () => {
    onDecreasePriority(task.id);
  };

  const handleIncreasePriority = () => {
    onIncreasePriority(task.id);
  };

  return (
    <li className="wrapper list-item">
      <p className="item name">{task.text}</p>
      <div className="wrapper field-s">
      <button onClick={handleDecreasePriority}>-</button>
      <input
        className="priority p-f"
        type="number"
        value={task.priority}
        onChange={handlePriorityChange}
      />
      <button onClick={handleIncreasePriority}>+</button>
      </div>
      <button className="field-s delete" onClick={handleDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskList;
