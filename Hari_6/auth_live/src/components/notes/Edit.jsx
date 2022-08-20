import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_V1_URL } from "../../utils/constant";
export function Edit() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [completed, setCompleted] = useState(false);
	const { _id } = useParams();

	const submit = async () => {
		const fetchData = await fetch(`${API_V1_URL}/note/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				content: content,
				completed,
			}),
		});

		const dataParsed = await fetchData.json();

		if (!fetchData.ok) {
			return alert("ERROR " + dataParsed.message);
		}

		return alert("SUCCESS " + dataParsed.message);
	};

	const fetchData_id = async () => {
		const fetchData = await fetch(`http://localhost:4000/api/v1/note/${_id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const dataParsed = await fetchData.json();

		if (!fetchData.ok) {
			return alert("ERROR " + dataParsed.message);
		}

		setTitle(dataParsed.data.title);
		setContent(dataParsed.data.content);
		setCompleted(dataParsed.data.completed);
	};

	useEffect(() => {
		fetchData_id();
	}, []);

	return (
		<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card' style={{ borderRadius: "15px" }}>
							<div className='card-body p-5'>
								<h2 className='mb-3'>Edit {_id}</h2>

								<hr />

								<Link to='/'>
									<button type='submit' className='btn btn-info'>
										<i className='fa-solid fa-arrow-left-long me-3'></i>
										Go back
									</button>
								</Link>

								<div className='mt-4'>
									<div className='form-floating mb-2'>
										<input className='form-control' id='title' placeholder='A title' value={title} onChange={(e) => setTitle(e.target.value)} />
										<label htmlFor='title'>Title</label>
									</div>
									<div className='form-floating mb-2'>
										<input className='form-control' id='content' placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} />
										<label htmlFor='content'>Content</label>
									</div>

									<div className='form-check'>
										<input className='form-check-input' type='checkbox' id='flexCheckDefault' value={completed} onChange={(e) => setCompleted(e.target.checked)} />
										<label className='form-check-label' htmlFor='flexCheckDefault'>
											Completed
										</label>
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
	);
}
