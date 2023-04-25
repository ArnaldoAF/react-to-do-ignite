import './global.css';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskInput />
      </div>
    </>
  )
}

export default App
