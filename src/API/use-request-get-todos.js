import { useEffect, useState } from 'react'
import { dbLink } from '../config.json'
const URL = dbLink

export const useRequestGetTodos = (refreshFlag, isSorted) => {
	const [todoList, setTodoList] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (todoList.length === 0) {
			setIsLoading(true)
		}

		fetch(isSorted ? `${URL}?_sort=title` : URL)
			.then((response) => response.json())
			.then((data) => setTodoList(data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false))
	}, [refreshFlag, isSorted, todoList.length])

	return {
		todoList,
		isLoading,
	}
}
