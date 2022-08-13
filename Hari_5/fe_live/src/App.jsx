import { Add, Home, Edit } from "./components";
import { Routes, Route } from "react-router-dom";

// App.js
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<Add />} />
				<Route path='/edit/:_id' element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;
