import styles from './TaskList.module.css';
import Clipboard from '../../assets/clipboard.svg' 
import { Task } from '../Task';
import TaskInterface from '../../interfaces/Task';

interface TaskListProps {
    tasks: TaskInterface[];
    handleCheck: (id: number) => void;
}

export function TaskList(props: TaskListProps) {
    const { tasks, handleCheck } = props;

    return (
        <div className={styles.taskList}>
            {tasks.map(task => <Task task={task} handleCheck={handleCheck}/>)}
            
            <div className={styles.emptyContainer}>
                <img src={Clipboard} alt="logo" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}