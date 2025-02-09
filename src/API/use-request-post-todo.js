import { dbLink } from '../config.json'
const URL = dbLink

export const useRequestPostTodo = (refreshFlag, setRefreshFlag) => {
	const postTodo = (todoText) => {
		fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ title: todoText }),
		})
			.catch((error) => console.log(error))
			.finally(() => {
				setRefreshFlag(!refreshFlag)
			})
	}

	return { postTodo }
}
