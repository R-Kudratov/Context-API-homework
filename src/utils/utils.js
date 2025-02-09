export const handleInput = (e, setInputValue, setIsSearching) => {
	const value = e.target.value
	if (value === '') {
		setInputValue('')
		setIsSearching(false)
		return
	}
	setInputValue(value)
}

export const handleSubmit = (e, inputValue, setInputValue, postTodo) => {
	e.preventDefault()
	if (inputValue === '') return
	postTodo(inputValue)
	setInputValue('')
}

export const handleSearch = (
	inputValue,
	todoList,
	setSearchedTodoList,
	setIsSearching,
) => {
	if (inputValue.trim() === '') {
		setIsSearching(false)
		return
	}

	const matchedTasks = todoList.filter((todo) =>
		todo.title.toLowerCase().includes(inputValue.toLowerCase()),
	)

	setSearchedTodoList(matchedTasks)
	setIsSearching(true)
}

export const handleEdit = (
	editingId,
	todoId,
	editTodo,
	editText,
	setEditingId,
	setEditText,
	currentText,
) => {
	if (editingId === todoId) {
		editTodo(editingId, editText)
		setEditingId(null)
	} else {
		setEditingId(todoId)
		setEditText(currentText)
	}
}

export const handleChancelEdit = (setEditingId, setEditText) => {
	setEditingId(null)
	setEditText('')
}

export const handleEditChange = (e, setEditText) => {
	setEditText(e.target.value)
}

export const handleDelete = (id, deleteTodo) => {
	deleteTodo(id)
}

export const handleSort = (setIsSorted, isSorted) => {
	setIsSorted(!isSorted)
}
