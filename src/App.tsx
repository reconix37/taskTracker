import { useState } from 'react'
import './App.css'
import { Label } from './components/ui/label';
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import type { TaskList } from './types/Types';

function App() {

  const [tasks, setTasks] = useState<TaskList>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if(newTaskTitle.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setError("");
  }

  return (
    <>
      <div className='app w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold underline mb-5'>Task Tracker</h1>
        <form onSubmit={handleAddTask} className='flex flex-col mt-4'>
          <div className='grid w-full items-center gap-2'>
            <Label htmlFor="task" className='font-bold'>New Task:</Label>
            <Input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="Add Task" className='border' />
            <Button type="submit" className='w-full max-w-md mx-auto mt-3 rounded'>Add Task</Button>
          </div>
        </form>
      </div>
      <div className='tasks-list w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold underline mb-5'>Tasks</h2>
        {tasks.length === 0 && <p className='text-gray-500'>No tasks added yet.</p>}
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className='mb-3 p-3 border rounded flex justify-between items-center text-left'>
              <span className={task.completed ? 'line-through text-gray-500 text-lg' : 'text-lg' }>{task.title}</span>
                <Input type="checkbox" checked={task.completed} className='max-w-5' onChange={(e)=>{setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t))}}/>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App
