import { API_V1_URL } from "../../utils/constant";

export function Logout({ setIsLoggedIn }) {
	const logout = async () => {
		const req = await fetch(`${API_V1_URL}/auth/logout`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		const res = await req.json();

		if (req.status === 200) {
			setIsLoggedIn(false);
			// alert(res.message);

			// remove cookie
			document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		} else {
			alert(req.status);
		}
	};

	return (
		<button className='btn btn-danger mx-2' onClick={logout}>
			Logout
		</button>
	);
}
