import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import type { Task } from "../types/Types";

interface TodoItemProps {
    task: Task;
    toggleTaskCompletion: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

export default function TodoItem({ task, toggleTaskCompletion, deleteTask }: TodoItemProps) {

    return (
            <li className='mb-3 p-3 border rounded flex justify-between items-center text-left'>
                <span className={task.completed ? 'line-through text-gray-500 text-lg' : 'text-lg'}>{task.title}</span>
                {task.completed && <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>}
                <Input type="checkbox" checked={task.completed} className='max-w-5' onChange={() => toggleTaskCompletion(task.id)} />
            </li>
    )
}