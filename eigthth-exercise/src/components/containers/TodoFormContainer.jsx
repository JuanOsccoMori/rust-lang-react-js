import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todoActions';
import TodoForm from '../pure/TodoForm';


const mapStateToProps = (state) => ({
    // not nesessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
            }
        }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer