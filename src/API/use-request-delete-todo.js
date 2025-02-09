import { dbLink } from '../config.json'
const URL = dbLink

export const useRequestDeleteTodo = (refreshFlag, setRefreshFlag) => {
	const deleteTodo = (todoId) => {
		fetch(`${URL}/${todoId}`, {
			method: 'DELETE',
		})
			.catch((error) => console.log(error))
			.finally(() => setRefreshFlag(!refreshFlag))
	}

	return { deleteTodo }
}
