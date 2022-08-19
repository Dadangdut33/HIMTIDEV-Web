import { useNavigate } from "react-router-dom";

export function Logout({ setLogin }) {
	const router = useNavigate();

	const logout = async () => {
		const response = await fetch("http://localhost:4000/api/v1/auth/logout", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const dataJson = await response.json();
		if (response.status === 200) {
			setLogin(false);
			alert(dataJson.message);
			router("/");
		} else {
			alert(dataJson.message);
		}
	};

	return (
		<button
			onClick={() => {
				logout();
			}}
			className='mx-3 btn btn-warning'
		>
			Logout
		</button>
	);
}
