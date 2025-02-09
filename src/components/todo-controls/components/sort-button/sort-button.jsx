import { use } from 'react'

import { TodoAppContext } from '../../../../context/context'
import { handleSort } from '../../../../utils/utils'

import styles from './sort-button.module.css'

export const SortButton = () => {
	const { isSorted, setIsSorted } = use(TodoAppContext)

	return (
		<span
			onClick={() => handleSort(setIsSorted, isSorted)}
			className={`${styles.btn} ${styles.sortSwitch} ${isSorted ? styles.activeSwitch : ''}`}
		></span>
	)
}
