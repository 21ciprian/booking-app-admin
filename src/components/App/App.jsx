import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home/Home'

function App() {
	return (
		<div>
			<h2>Admin app</h2>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
