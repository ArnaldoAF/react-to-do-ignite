import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import TaskInterface from '../../interfaces/Task';

interface TaskProps {
    task: TaskInterface;
    handleCheck: (id: number) => void;
}

export function Task(props: TaskProps) {
    const { task, handleCheck} = props;
    const { id, description, checked} = task;
    return (
        <div className={styles.task}>
            <label className={styles.container} onChange={() => handleCheck(id)}>
                <input type="checkbox" checked={checked}/>
                <span className={styles.checkmark}></span>
            </label>
            <p className={checked ? styles.taskChecked : ''}>{description}</p>
            <button><Trash size={24}/></button>
        </div>
    )
}