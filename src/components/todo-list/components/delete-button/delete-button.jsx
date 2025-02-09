import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { TodoItemContext } from '../../../../context/context'
import { handleDelete, handleChancelEdit } from '../../../../utils/utils'

import styles from './delete-button.module.css'

export const DeleteButton = () => {
	const { editingId, setEditingId, setEditText, deleteTodo } =
		use(TodoAppContext)
	const { id } = use(TodoItemContext)

	return (
		<button
			onClick={
				editingId === id
					? () => handleChancelEdit(setEditingId, setEditText)
					: () => handleDelete(id, deleteTodo)
			}
			className={`${styles.btn} ${styles.deleteBtn}`}
		></button>
	)
}
