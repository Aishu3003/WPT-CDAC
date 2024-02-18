// todoActions.js
export const addTodo = text => ({
    type: 'ADD_TODO',
    payload: {
      id: Math.random(),
      text
    }
  });
  
  export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload: id
  });
  