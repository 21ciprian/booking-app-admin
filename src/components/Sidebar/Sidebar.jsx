import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Sidebar.module.css'

function Sidebar() {
	return (
		<section className={styles.sidebar}>
			<div className={styles.top}>
				<Link to='/' style={{textDecoration: 'none'}}>
					BookingAdmin
				</Link>
			</div>
		</section>
	)
}

export default Sidebar
