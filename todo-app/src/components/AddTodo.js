import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../reducers/todoSlice';

const AddTodo = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      addTask({ id: Date.now(), text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container d-flex justify-content-center align-items-center p-3 ">
  <div className="input-group">
    <input type="text" value={text} onChange={e => setText(e.target.value)} className="form-control" />
    <button type="submit" className="btn btn-primary ">Add Task</button>
  </div>
</form>

  );
};

export default connect(null, { addTask })(AddTodo);
