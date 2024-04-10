import { useSelector, useDispatch } from 'react-redux'
import { setTextValue, clearTextValue } from '../redux/todosSlice'
import { addTask } from '../redux/todosSlice'

export default function TaskForm() {
    const dispatch = useDispatch()
    const textValue = useSelector(state => state.text.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(textValue))
        dispatch(clearTextValue())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={textValue}
                onChange={e => dispatch(setTextValue(e.target.value))}
                placeholder='Nueva tarea'
            />
            <button type='submit'>Añadir</button>
        </form>
    )
}