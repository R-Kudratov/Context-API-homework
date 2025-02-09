import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { TodoItemContext } from '../../../../context/context'
import { handleEdit } from '../../../../utils/utils'

import styles from './edit-button.module.css'

export const EditButton = () => {
	const { editingId, editTodo, setEditingId, setEditText, editText } =
		use(TodoAppContext)
	const todo = use(TodoItemContext)
	const todoId = todo?.id
	const currentText = todo?.title

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
