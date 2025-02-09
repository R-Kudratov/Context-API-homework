import { use } from 'react'

import { TodoAppContext } from './context/context'
import { TodoAppProvider } from './context/todo-app-provider'
import { Loader, TodoControls, TodoList } from './components'

import styles from './todo-app.module.css'

export const TodoApp = () => {
	const { isLoading } = use(TodoAppContext)
	return (
		<TodoAppProvider>
			<div className={styles.todoList}>
				<TodoControls />
				{isLoading ? <Loader /> : <TodoList />}
			</div>
		</TodoAppProvider>
	)
}
