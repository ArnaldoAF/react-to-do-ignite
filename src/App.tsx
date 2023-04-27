import './global.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import styles from './App.module.css';
import { ChipText } from './components/ChipText';
import { TaskList } from './components/TaskList';
import TaskInterface from './interfaces/Task';


const taskTempLocalList = [
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
  const [taskLocalList, setTaskLocalList] = useState<TaskInterface[]>(taskTempLocalList);

  function checkTask(id:number) {
    const tempList = taskLocalList.map((task) => 
    task.id == id ? {...task, checked: !task.checked} : {...task}
    )

    tempList.sort((a, b) => a.checked && !b.checked ? 1 : -1);
    setTaskLocalList(tempList);
  }

  function deleteTask(id:number) {
    setTaskLocalList(
      taskLocalList.filter((task) => task.id != id)
    );
  }

  const tasksCreatedText = () =>  taskLocalList.length.toString();

  const tasksFinishedText = () =>  {
    const finishedNumber = taskLocalList.filter(task => task.checked).length;

    return `${finishedNumber} de ${tasksCreatedText()}`
  }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskInput />
        <div className={styles.listContainer}>
          <div className={styles.chipContainer}>
            <ChipText 
              label='Tarefas criadas'
              value={tasksCreatedText()}
            />

            <ChipText 
              label='Concluídas'
              value={tasksFinishedText()}
              isPurple
            />

          </div>

          <TaskList 
            tasks={taskLocalList}
            handleCheck={checkTask}
            handleDelete={deleteTask}
          />

        </div>
      </div>
    </>
  )
}

export default App
