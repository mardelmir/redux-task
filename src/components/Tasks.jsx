import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../redux/todosSlice'

export default function Tasks() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)

    return (
        <ul>
            {todo.map(task =>
                <li key={task.id}>
                    {task.text}
                    <button onClick={()=> dispatch(deleteTask(task.id))}>Eliminar</button>
                </li>)}
        </ul>
    )
}