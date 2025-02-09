import { InputForm, SearchButton, SortButton } from './components/index'
import styles from './todo-controls.module.css'

export const TodoControls = () => {
	return (
		<div className={styles.controlsWrapper}>
			<InputForm />
			<SearchButton />
			<SortButton />
		</div>
	)
}
