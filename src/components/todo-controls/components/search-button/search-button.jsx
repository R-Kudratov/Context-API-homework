import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { handleSearch } from '../../../../utils/utils'

import styles from './search-button.module.css'

export const SearchButton = () => {
	const { inputValue, todoList, setSearchedTodoList, setIsSearching } =
		use(TodoAppContext)

	return (
		<button
			onClick={() =>
				handleSearch(
					inputValue,
					todoList,
					setSearchedTodoList,
					setIsSearching,
				)
			}
			className={`${styles.btn} ${styles.searchBtn}`}
		/>
	)
}
