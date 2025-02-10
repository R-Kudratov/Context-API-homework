import { use } from 'react'

import { TodoAppContext } from '../../context/context'
import { TodoItemContext } from '../../context/context'
import { ListItem, EditButton, DeleteButton } from './components'

import styles from './todo-list.module.css'

export const TodoList = () => {
	const { todoList, searchedTodoList, isSearching } = use(TodoAppContext)
	return (
		<div className={styles.todosWrapper}>
			<ul className={styles.todos}>
				{(isSearching ? searchedTodoList : todoList).map(
					({ id, title }) => (
						<TodoItemContext key={id} value={{ id, title }}>
							<ListItem>
								<EditButton />
								<DeleteButton />
							</ListItem>
						</TodoItemContext>
					),
				)}
			</ul>
		</div>
	)
}
