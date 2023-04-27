import './global.css';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import styles from './App.module.css';
import { ChipText } from './components/ChipText';
import { TaskList } from './components/TaskList';


const taskLocalList = [
  {
    id: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.",
    checked: false
  },
  {
    id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.",
    checked: true
  },
  {
    id: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.",
    checked: false
  },
  {
    id: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.",
    checked: true
  },
  {
    id: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor condimentum malesuada. Vestibulum fringilla, nisl.",
    checked: false
  }
]

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
              value={taskLocalList.length.toString()}
            />

            <ChipText 
              label='Concluídas'
              value='0 de 0'
              isPurple
            />

          </div>

          <TaskList tasks={taskLocalList}/>

        </div>
      </div>
    </>
  )
}

export default App
