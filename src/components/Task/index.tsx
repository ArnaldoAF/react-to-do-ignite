import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
    return (
        <div className={styles.task}>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.</p>
            <button><Trash size={24}/></button>
        </div>
    )
}