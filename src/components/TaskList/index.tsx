import styles from './TaskList.module.css';
import Clipboard from '../../assets/clipboard.svg' 
import { Task } from '../Task';

export function TaskList() {
    return (
        <div className={styles.taskList}>
            <Task />
            <div className={styles.emptyContainer}>
                <img src={Clipboard} alt="logo" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}