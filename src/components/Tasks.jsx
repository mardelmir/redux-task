import { useSelector, useDispatch } from 'react-redux'

export default function Tasks() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)

    return (
        <ul>
            {todo.map(task => <li key={task.id}>{task.text}</li>)}
        </ul>
    )
}