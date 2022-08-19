import { Add, Edit, Notes, Home, Login, Register } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { NotFound } from "./components/auth/NotFound";

// App.js
function App() {
	const [loggedIn, setIsLoggedIn] = useState();

	useEffect(() => {
		// fetch from api check if user is logged in
		const fetchData = async () => {
			const data = await fetch("http://localhost:4000/api/v1/auth/check", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
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
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login setLogin={setIsLoggedIn} />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		);
	}

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Notes setLogin={setIsLoggedIn} />} />
				<Route path='/add' element={<Add />} />
				<Route path='/edit/:_id' element={<Edit />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
