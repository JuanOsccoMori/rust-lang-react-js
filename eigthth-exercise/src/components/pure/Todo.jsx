import React from 'react';
import PropTypes from "prop-types";

const Todo = ({ onClickProp, completed, text, id }) => {
    return (
        <li 
            onClick={onClickProp}
            style={{
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'tomato'
            }}
            >
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClickProp: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;