import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../redux/todosSlice'
import { setTextValue, clearTextValue } from '../redux/todosSlice'
import { store } from '../redux/store.js'

export default function TaskForm() {
    const dispatch = useDispatch()
    const textValue = useSelector(state => state.text.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(textValue))
        dispatch(clearTextValue())
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