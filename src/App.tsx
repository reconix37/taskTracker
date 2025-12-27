import { useEffect, useState } from 'react'
import './App.css'
import { Label } from './components/ui/label';
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import type { TaskList } from './types/Types';
import TasksListCard from './tasksComponents/TasksListCard';

function App() {

  const [tasks, setTasks] = useState<TaskList>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      title: newTaskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setError("");
  }

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <>
      <div className='app w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold underline mb-5'>Task Tracker</h1>
        <form onSubmit={handleAddTask} className='flex flex-col mt-4'>
          <div className='grid w-full items-center gap-2'>
            <Label htmlFor="task" className='font-bold'>New Task:</Label>
            <Input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="Add Task" className='border' />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <Button type="submit" className='w-full max-w-md mx-auto mt-3 rounded'>Add Task</Button>
          </div>
        </form>
      </div>
      <TasksListCard tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </>
  )
}

export default App
