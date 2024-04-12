import './App.css'
import TaskForm from './components/TaskForm.jsx'
import Tasks from './components/Tasks.jsx'

export default function App() {
  return (
    <>
      <h1>Lista de tareas</h1>
      <TaskForm />
      <Tasks />
    </>
  );
};


// Clase
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, removeTodo } from './redux/todosSlice.js';

// const App2 = () => {
//   const [inputText, setImputText] = useState('')
//   const dispatch = useDispatch()
//   const todos = useSelector(state => state.todos)

//   const handleClickAdd = () => {
//     dispatch(addTodo(
//       {
//         id: Math.floor(Math.random() * 11),
//         text: inputText
//       }
//     ))
//     setInputText('')
//   }

//   return (
//     <>
//       <h1>Todo List</h1>
//       <input
//         type='text'
//         placeholder='Introduce la tarea'
//         value={inputText}
//         onChange={e => setImputText(e.target.value)} />
//       <button onClick={handleClickAdd}>Añade tarea</button>

//       <ul>
//         {todos.map(t => (
//           <li key={t.id}>
//             {t.text}
//             <button onClick={() => dispatch(removeTodo(t.id))}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }


// import React, { useReducer } from 'react'

// // Definición de reducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'MULTYPLY':
//       return { count: state.count * 2 }
//     default:
//       return state;
//   }
// }

// // Componente principal
// const AppRed = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 1 });
//   return (
//     <div>
//       <h1>Ejemplo de useReducer en React</h1>
//       <div>
//         <h2>Contador: {state.count}</h2>
//         {/* Botones para modificar contador */}
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
//       </div>
//     </div>
//   )
// }