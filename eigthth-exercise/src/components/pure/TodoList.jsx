import React from 'react';
import PropTypes from "prop-types";
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            <p>Your TODOs</p>
            <ul>
                {todos.map((todo, i) => (
                    <Todo 
                        key={i}
                        {...todo}
                        onClickProp = {
                            () => onTodoClick(todo.id)
                        }

                    />
                ))}
            </ul>
        </div>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}
export default TodoList;
