import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
	const [mode, setMode] = useState("all");
	const [notes, setNotes] = useState(null);

	const filterCompleted = (notes) => {
		return notes.filter((note) => note.completed === true);
	};

	const filterUncompleted = (notes) => {
		return notes.filter((note) => note.completed === false);
	};

	const filterAll = (notes) => {
		return notes;
	};

	const filterMap = {
		all: filterAll,
		active: filterUncompleted,
		completed: filterCompleted,
	};

	const fillData = async () => {
		const dataFetch = await fetch("http://localhost:4000/api/v1/note", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const dataJson = await dataFetch.json();

		if (dataFetch.ok) setNotes(dataJson.data);
		else
			setNotes({
				title: "Something went wrong",
				content: dataJson.message,
				completed: false,
			});
	};

	const checkBoxClick = async (_id) => {
		const correctIndex = notes.findIndex((note) => note._id === _id);
		const completed = notes[correctIndex].completed;

		const response = await fetch(`http://localhost:4000/api/v1/note/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				completed: !completed,
			}),
		});

		const dataJson = await response.json();

		if (!response.ok) return alert(`Something went wrong. ${dataJson.message}`);

		// update
		setNotes((prevNotes) => {
			const newNotes = [...prevNotes];
			newNotes[correctIndex].completed = !completed;

			return newNotes;
		});

		// debug
		// alert(`Todo updated successfully\nGot: ${dataJson.message}`);
	};

	useEffect(() => {
		fillData();
	}, []);

	return (
		<section className='vh-100 gradient-custom'>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card'>
							<div className='card-body p-5'>
								<h1>Simple Task Tracker</h1>
								<hr />
								<nav className='mx-auto mt-3'>
									<Link to='/add'>
										<button type='button' className='btn btn-primary'>
											Add New
										</button>
									</Link>
								</nav>

								<ul className='nav nav-tabs mb-2 pb-2 mt-4'>
									<li className='nav-item' onClick={() => setMode("all")}>
										<span className={mode === "all" ? `nav-link active` : `nav-link`}>All</span>
									</li>
									<li className='nav-item' onClick={() => setMode("active")}>
										<span className={mode === "active" ? `nav-link active` : `nav-link`}>Active</span>
									</li>
									<li className='nav-item' onClick={() => setMode("completed")}>
										<span className={mode === "completed" ? `nav-link active` : `nav-link`}>Completed</span>
									</li>
								</ul>

								<div className='tab-content'>
									<div className='tab-pane fade show active'>
										<ul className='list-group mb-0'>
											{notes ? (
												filterMap[mode](notes).map((note, index) => (
													<li className='list-group-item d-flex align-items-center border-0 mb-2 rounded' key={index} style={{ backgroundColor: "#f4f6f7" }}>
														<input className='form-check-input me-2' type='checkbox' value='' aria-label='...' checked={note.completed} onChange={() => checkBoxClick(note._id)} />
														<div className='d-flex flex-column'>
															{note.completed ? (
																<>
																	<s>
																		<p className='h5'>{note.title}</p>
																		<p className='mb-0'>{note.content}</p>
																	</s>
																</>
															) : (
																<>
																	<p className='h5'>{note.title}</p>
																	<p className='mb-0'>{note.content}</p>
																</>
															)}
														</div>
													</li>
												))
											) : (
												<div class='d-flex justify-content-center mt-6'>
													<div class='spinner-border' role='status'>
														<span class='visually-hidden'>Loading...</span>
													</div>
												</div>
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
