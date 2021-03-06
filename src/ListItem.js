import React from 'react';

const ListItem = (props) => {
	return <li className="list-group-item">
      <button
        className="btn-sm mr-4 btn btn-info"
        onClick={ props.editTodo }
      >u</button>
      {props.item.name}
      <button
        className="btn-sm ml-4 btn btn-danger"
        onClick={ props.deleteTodo}
      >x</button>
    </li>
}

export default ListItem;