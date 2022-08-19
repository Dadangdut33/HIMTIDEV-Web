import { useState } from "react";
import { Link } from "react-router-dom";

export function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const submit = async () => {
		if (password !== passwordConfirm) {
			alert("Passwords do not match");
			return;
		}

		const response = await fetch("http://localhost:4000/api/v1/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
			credentials: "include",
		});
		const content = await response.json();
		console.log(content);

		alert(content.message);
	};

	return (
		<>
			<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col col-xl-10'>
							<div className='card' style={{ borderRadius: "15px" }}>
								<div className='card-body p-5'>
									<h2 className='mb-3'>Add New</h2>

									<hr />

									<Link to='/'>
										<button type='submit' className='btn btn-info'>
											<i className='fa-solid fa-arrow-left-long me-3'></i>
											Go back to home
										</button>
									</Link>
									<Link to='/login'>
										<button type='submit' className='mx-3 btn btn-info'>
											Login
										</button>
									</Link>

									<div className='mt-4'>
										<div className='form-floating mb-2'>
											<input className='form-control' id='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
											<label htmlFor='username'>Username</label>
										</div>
										<div className='form-floating mb-2'>
											<input className='form-control' type='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
											<label htmlFor='password'>Password</label>
										</div>
										<div className='form-floating mb-2'>
											<input className='form-control' type='password' id='password' placeholder='Password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
											<label htmlFor='password'>Password</label>
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
