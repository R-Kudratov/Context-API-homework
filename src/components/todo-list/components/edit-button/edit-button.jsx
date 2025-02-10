import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { TodoItemContext } from '../../../../context/context'
import { handleEdit } from '../../../../utils/utils'
import { useRequestEditTodo } from '../../../../API/use-request-edit-todo.js'

import styles from './edit-button.module.css'

export const EditButton = () => {
	const {
		editingId,
		setEditingId,
		setEditText,
		editText,
		refreshFlag,
		setRefreshFlag,
	} = use(TodoAppContext)
	const todo = use(TodoItemContext)
	const todoId = todo?.id
	const currentText = todo?.title

	const { editTodo } = useRequestEditTodo(refreshFlag, setRefreshFlag)

	return (
		<button
			onClick={() =>
				handleEdit(
					editingId,
					todoId,
					editTodo,
					editText,
					setEditingId,
					setEditText,
					currentText,
				)
			}
			className={`${styles.btn} ${editingId === todoId ? styles.confirmEditBtn : styles.editBtn}`}
		></button>
	)
}
