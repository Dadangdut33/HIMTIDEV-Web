import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddNew } from "./Components/AddNew";

// App.jsx
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<AddNew />} />
			</Routes>
		</div>
	);
}

export default App;
