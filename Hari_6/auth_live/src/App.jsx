import { Add, Notes, Edit, Page_404, Login, Register } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_V1_URL } from "./utils/constant";

// App.js
function App() {
	const [loggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// fetch from api check if user is logged in
		const fetchData = async () => {
			const data = await fetch(`${API_V1_URL}/auth/check`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (data.status !== 200) {
				return setIsLoggedIn(false);
			}
			setIsLoggedIn(true);
		};

		fetchData();
	}, []);

	if (!loggedIn) {
		return (
			<>
				<Routes>
					<Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<Page_404 />} />
				</Routes>
			</>
		);
	}

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Notes setIsLoggedIn={setIsLoggedIn} />} />
				<Route path='/add' element={<Add />} />
				<Route path='/edit/:_id' element={<Edit />} />
				<Route path='*' element={<Page_404 />} />
			</Routes>
		</div>
	);
}

export default App;
