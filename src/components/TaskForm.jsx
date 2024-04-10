import { useSelector, useDispatch } from 'react-redux'
import { setTextValue, clearTextValue } from '../redux/todosSlice'
import { addTask } from '../redux/todosSlice'

// Remove on revision
import { store } from '../redux/store.js'

export default function TaskForm() {
    const dispatch = useDispatch()
    const textValue = useSelector(state => state.text.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(textValue))
        dispatch(clearTextValue())

        // Remove on revision
        console.log(store.getState())
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