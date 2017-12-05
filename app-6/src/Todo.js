import React from 'react';

export const Todo = (props) => {
  let arrDisplay = props.todos.map( (el, i) => <h2 key={ i }>{ el }</h2> )

  return (
    <div>
      { arrDisplay }
    </div>
  );
}
export default Todo