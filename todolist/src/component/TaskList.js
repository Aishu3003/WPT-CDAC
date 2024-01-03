import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
