import React, { useState} from "react";
import './TaskForm.css';
const TaskForm = ({onAddTask}) => {
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddTask = () => {
    if (taskName && duration) {
      onAddTask({ taskName, duration });
      setTaskName("");
      setDuration("");
    }
  };
  return (
    <div>
        
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <button onClick={handleAddTask}>Add List</button>
    </div>
  );
};

export default TaskForm;
