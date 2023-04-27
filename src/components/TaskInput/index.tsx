import styles from './taskInput.module.css';
import  { ChangeEvent, FormEvent, useState } from 'react';

interface TaskInputProps {
    handleAddTask: (description: string) => void;
}

export function TaskInput(props: TaskInputProps) {
    const {handleAddTask} = props;
    const [newTask, setNewTask ] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        setNewTask('');
        handleAddTask(newTask);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.taskInput}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setNewTask(event.target.value)}
                required
            />
            <button type="submit">Criar</button>
        </form>
    )
}