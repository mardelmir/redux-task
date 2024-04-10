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