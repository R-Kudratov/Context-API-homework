import { useState } from 'react'

import { TodoAppContext } from './context'

import {
	useRequestPostTodo,
	useRequestDeleteTodo,
	useRequestEditTodo,
	useRequestGetTodos,
} from '../API'

export const TodoAppProvider = ({ children }) => {
	const [inputValue, setInputValue] = useState('')
	const [searchedTodoList, setSearchedTodoList] = useState([])
	const [isSorted, setIsSorted] = useState(false)
	const [isSearching, setIsSearching] = useState(false)
	const [editingId, setEditingId] = useState(null)
	const [editText, setEditText] = useState('')
	const [refreshFlag, setRefreshFlag] = useState(false)

	const { todoList, isLoading } = useRequestGetTodos(refreshFlag, isSorted)
	const { postTodo } = useRequestPostTodo(refreshFlag, setRefreshFlag)
	const { deleteTodo } = useRequestDeleteTodo(refreshFlag, setRefreshFlag)
	const { editTodo } = useRequestEditTodo(refreshFlag, setRefreshFlag)

	return (
		<TodoAppContext
			value={{
				inputValue,
				setInputValue,
				searchedTodoList,
				setSearchedTodoList,
				isSorted,
				setIsSorted,
				isSearching,
				setIsSearching,
				editingId,
				setEditingId,
				editText,
				setEditText,
				refreshFlag,
				setRefreshFlag,
				todoList,
				isLoading,
				postTodo,
				deleteTodo,
				editTodo,
			}}
		>
			{children}
		</TodoAppContext>
	)
}
