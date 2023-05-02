import './global.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import styles from './App.module.css';
import { ChipText } from './components/ChipText';
import { TaskList } from './components/TaskList';
import TaskInterface from './interfaces/Task';

function App() {
	const [taskLocalList, setTaskLocalList] = useState<TaskInterface[]>([]);

	function sortFunction(a: any, b: any) {
		return a.checked - b.checked || a.id - b.id;
	}

	function checkTask(id: number) {
		const tempList = taskLocalList.map((task) =>
			task.id == id ? { ...task, checked: !task.checked } : { ...task }
		)

		tempList.sort(sortFunction);
		setTaskLocalList(tempList);
	}

	function addTask(description: string) {
		let tempId = 0;
		if (taskLocalList.length) {
			const idList = taskLocalList.map(task => task.id);
			tempId = Math.max(...idList) + 1;
		}

		const tempTask = {
			id: tempId,
			description: description,
			checked: false
		}

		const tempList = [...taskLocalList, tempTask];

		tempList.sort(sortFunction);

		setTaskLocalList(tempList);
	}

	function deleteTask(id: number) {
		setTaskLocalList(
			taskLocalList.filter((task) => task.id != id)
		);
	}

	const tasksCreatedText = () => taskLocalList.length.toString();

	const tasksFinishedText = () => {
		const finishedNumber = taskLocalList.filter(task => task.checked).length;

		return `${finishedNumber} de ${tasksCreatedText()}`
	}

	return (
		<>
			<Header />
			<div className={styles.content}>
				<TaskInput handleAddTask={addTask} />
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
