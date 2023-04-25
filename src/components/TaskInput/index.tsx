import styles from './taskInput.module.css';
import Logo from '../../assets/logo.svg'

export function TaskInput() {
    return (
        <div className={styles.taskInput}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar</button>
        </div>
    )
}