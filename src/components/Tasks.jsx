import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, toggleComplete } from '../redux/todosSlice'

export default function Tasks() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)

    return (
        <ul className='list'>
            {todo.map(task =>
                <li key={task.id} className='task'>
                    <p
                        onClick={() => dispatch(toggleComplete(task.id))}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >{task.text}</p>
                    <img
                        src='./src/assets/trash.svg'
                        onClick={() => dispatch(deleteTask(task.id))} />
                </li>)}
        </ul>
    )
}