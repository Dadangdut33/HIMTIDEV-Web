import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_V1_URL } from "../../utils/constant";

export function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const router = useNavigate();

	const submit = async (e) => {
		if (password !== passwordConfirm) {
			alert("Passwords do not match");
			return;
		}

		const req = await fetch(`${API_V1_URL}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				username,
				password,
			}),
		});

		const res = await req.json();

		if (req.status === 200) {
			alert(res.message);
		} else {
			alert(res.message);
		}
	};

	return (
		<>
			<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col col-xl-10'>
							<div className='card' style={{ borderRadius: "15px" }}>
								<div className='card-body p-5 d-flex flex-column'>
									<div className='mt-4'>
										<h1>Login</h1>
										<Link to={"/"}>
											<button className='btn btn-primary '>Login</button>
										</Link>
										<div className='form-floating mt-3 mb-2'>
											<input className='form-control' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
											<label htmlFor='username'>Username</label>
										</div>
										<div className='form-floating mb-2'>
											<input className='form-control' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
											<label htmlFor='password'>Password</label>
										</div>
										<div className='form-floating mb-2'>
											<input className='form-control' id='passwordconfirm' type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
											<label htmlFor='passwordconfirm'>Password Confirmation</label>
										</div>

										<button className='btn btn-primary float-end' onClick={() => submit()}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
