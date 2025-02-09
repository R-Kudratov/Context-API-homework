import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { TodoItemContext } from '../../../../context/context'
import { handleEditChange } from '../../../../utils/utils'

import styles from './list-item.module.css'

export const ListItem = ({ children }) => {
	const { editingId, editText, setEditText } = use(TodoAppContext)
	const { id, title } = use(TodoItemContext)

	return (
		<li className={styles.item}>
			{editingId === id ? (
				<input
					type="text"
					value={editText}
					onChange={(e) => handleEditChange(e, setEditText)}
					className={`${styles.editItemInput} ${styles.input}`}
					autoFocus
				/>
			) : (
				<span>{title}</span>
			)}
			{children}
		</li>
	)
}
