import { useState } from "react";
import { Link } from "react-router-dom";
export function AddNew() {
	const [title, setName] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if empty alert error
		if (title === "" || description === "") return alert("Please fill out all fields");

		// if filled out, submit to database
		const response = await fetch("http://localhost:4000/api/v1/note", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				content: description,
				completed,
			}),
		});

		const dataJson = await response.json();
		if (!response.ok) return alert(`Something went wrong. ${dataJson.message}`);

		alert(`Todo added successfully\nGot: ${dataJson.message}`);
	};

	return (
		<section className='vh-100 gradient-custom'>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card'>
							<div className='card-body p-5'>
								<h1>Simple Task Tracker</h1>
								<hr />
								<nav className='mx-auto'>
									<Link to='/'>
										<button type='button' className='btn btn-primary'>
											Go back
										</button>
									</Link>
								</nav>
								<h3 className='text-center'>Add new task</h3>
								<form onSubmit={handleSubmit}>
									<div className='form-group'>
										<label htmlFor='title'>Title</label>
										<input type='text' className='form-control' id='title' value={title} onChange={(e) => setName(e.target.value)} />

										<label htmlFor='description'>Description</label>
										<textarea className='form-control' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />

										<div className='form-check'>
											<input type='checkbox' className='form-check-input' id='completed' checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
											<label className='form-check-label' htmlFor='completed'>
												Completed
											</label>
										</div>

										<button type='submit' className='btn btn-primary mt-3 float-end'>
											Add task
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
