import styles from './TaskList.module.css';
import Clipboard from '../../assets/clipboard.svg' 

export function TaskList() {
    return (
        <div className={styles.taskList}>
            <div className={styles.emptyContainer}>
                <img src={Clipboard} alt="logo" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}