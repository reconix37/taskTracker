import { useState } from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import type { Task } from "../types/Types";

interface TodoItemProps {
    task: Task;
    toggleTaskCompletion: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
    isEditing?: boolean;
    onStartEditingTask: (taskId: string) => void;
    onStopEditingTask: () => void;
    onEditTask: (taskId: string, newTitle: string) => void;
}

export default function TodoItem({ task, toggleTaskCompletion, deleteTask, isEditing, onStartEditingTask, onStopEditingTask, onEditTask }: TodoItemProps) {

    const [newTitle, setNewTitle] = useState(task.title);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSaveEdit = () => {
        if (newTitle.trim() === "") {
            setErrorMessage("Task title cannot be empty.");
            return;
        }
        else {
            setErrorMessage("");
            onEditTask(task.id, newTitle);
        }
    }

    return (
        <> {isEditing ? (
            <li className='mb-3 p-3 border rounded flex flex-col gap-2'>
                <div className='flex justify-between items-center w-full'>
                    <Input
                        type="text"
                        value={newTitle}
                        onChange={(e) => {
                            setNewTitle(e.target.value);
                            if (errorMessage) setErrorMessage(""); // Убираем ошибку, когда юзер начал писать
                        }}
                        className={`w-full mr-2 ${errorMessage ? 'border-red-500' : ''}`}
                    />
                    <div className='flex gap-2'>
                        <Button size="sm" onClick={handleSaveEdit}>Save</Button>
                        <Button variant="outline" size="sm" onClick={() => { onStopEditingTask(); setNewTitle(task.title); setErrorMessage(""); }}>Cancel</Button>
                    </div>
                </div>
                {errorMessage && <p className='text-red-500 text-xs'>{errorMessage}</p>}
            </li>
        ) : (
            <li className='mb-3 p-3 border rounded flex justify-between items-start text-left'>
                <div className='flex items-start gap-3 flex-1 min-w-0'>
                    <Input type="checkbox" checked={task.completed} className='w-4 h-4 mt-1.5 shrink-0' onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span className={`text-lg leading-tight break-all overflow-hidden ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                    </span>
                </div>
                <div className='flex gap-2 shrink-0 ml-4'>
                    <Button variant="outline" size="sm" onClick={() => onStartEditingTask(task.id)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
                </div>
            </li>
        )}
        </>
    )
}