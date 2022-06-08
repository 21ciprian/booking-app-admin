import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './Home.module.css'

function Home() {
	return (
		<section className={styles.home}>
			<h1>home</h1>

			<Sidebar />
		</section>
	)
}

export default Home
