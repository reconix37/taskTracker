

import './App.css'
import { Label } from './components/ui/label';
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='app w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold underline mb-5'>Task Tracker</h1>
        <form action="submit" className='flex flex-col mt-4'>
          <div className='grid w-full items-center gap-2'>
            <Label htmlFor="task" className='font-bold'>New Task:</Label>
            <Input type="text" placeholder="Add Task" className='border' />
            <Button type="submit" className='w-full max-w-md mx-auto mt-3 rounded'>Add Task</Button>
          </div>
        </form>
      </div>
      <div className='tasks-list w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold underline mb-5'>Tasks</h2>
        {}

      </div>
    </>
  )
}

export default App
