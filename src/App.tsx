import './global.css';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import styles from './App.module.css';
import { ChipText } from './components/ChipText';
import { TaskList } from './components/TaskList';

function App() {

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskInput />
        <div className={styles.listContainer}>
          <div className={styles.chipContainer}>
            <ChipText 
              label='Tarefas criadas'
              value='0'
            />

            <ChipText 
              label='Concluídas'
              value='0 de 0'
              isPurple
            />

          </div>

          <TaskList />

        </div>
      </div>
    </>
  )
}

export default App
