import { use } from 'react'
import { TodoAppContext } from '../../../../context/context'
import { handleSubmit, handleInput } from '../../../../utils/utils'
import { useRequestPostTodo } from '../../../../API/use-request-post-todo.js'

import styles from './input-form.module.css'

export const InputForm = () => {
	const {
		inputValue,
		setInputValue,
		setIsSearching,
		refreshFlag,
		setRefreshFlag,
	} = use(TodoAppContext)
	const { postTodo } = useRequestPostTodo(refreshFlag, setRefreshFlag)

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e, inputValue, setInputValue, postTodo)
			}}
			className={styles.inputWrapper}
		>
			<input
				type="text"
				className={styles.input}
				placeholder="Введите текст задачи"
				value={inputValue}
				onChange={(e) => handleInput(e, setInputValue, setIsSearching)}
			/>
			<button
				type="submit"
				className={`${styles.btn} ${styles.submitBtn}`}
			></button>
		</form>
	)
}
