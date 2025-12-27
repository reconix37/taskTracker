import type { TaskList } from "../types/Types";
import TodoItem from "./TodoItem";

interface TasksListCardProps {
  tasks: TaskList;
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export default function TasksListCard({tasks, toggleTaskCompletion, deleteTask }: TasksListCardProps) {

  return (
    <div className='tasks-list w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold underline mb-5'>Tasks</h2>
        {tasks.length === 0 && <p className='text-gray-500'>No tasks added yet.</p>}
        <ul>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
          ))}
        </ul>
      </div>
  )
}
