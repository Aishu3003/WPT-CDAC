import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { removeTask } from '../reducers/todoSlice';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 w-75">
      <table className="table table-striped table-bordered ">
        <thead className="table-primary ">
          <tr>
            <th>Index</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.text}</td>
              <td>
                <button className="btn btn-primary" onClick={() => removeTask(task.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.todos.tasks
});

export default connect(mapStateToProps, { removeTask })(TodoList);
