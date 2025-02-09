import { dbLink } from '../config.json'
const URL = dbLink

export const useRequestEditTodo = (refreshFlag, setRefreshFlag) => {
	const editTodo = (editingId, newText) => {
		fetch(`${URL}/${editingId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ title: newText }),
		})
			.catch((error) => console.log(error))
			.finally(() => {
				setRefreshFlag(!refreshFlag)
			})
	}
	return { editTodo }
}
