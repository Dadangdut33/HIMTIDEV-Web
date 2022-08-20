import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth";

export function Notes({ setIsLoggedIn }) {
	const [showMode, setMode] = useState("all");
	const [notes, setNotes] = useState(null);

	const filterCompleted = (notesLocal) => {
		return notesLocal.filter((note) => note.completed === true);
	};

	const filterUncompleted = (notesLocal) => {
		return notesLocal.filter((note) => note.completed === false);
	};

	const filterAll = (notesLocal) => {
		return notesLocal;
	};

	const filterMap = {
		all: filterAll,
		active: filterUncompleted,
		completed: filterCompleted,
	};

	const fillData = async () => {
		const fetchedData = await fetch("http://localhost:4000/api/v1/note", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const dataJson = await fetchedData.json();

		if (!fetchedData.status === 200) {
			setNotes({
				title: "Something went wrong",
				content: dataJson.message,
				completed: false,
			});
		} else {
			setNotes(dataJson.data);
		}
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

	const deleteData = async (_id) => {
		const correctIndex = notes.findIndex((note) => note._id === _id);

		const response = await fetch(`http://localhost:4000/api/v1/note/${_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const dataJson = await response.json();

		if (!response.ok) return alert(`Something went wrong. ${dataJson.message}`);

		// update
		setNotes((prevNotes) => {
			const newNotes = [...prevNotes];
			newNotes.splice(correctIndex, 1);

			return newNotes;
		});

		// debug
		// alert(`Todo updated successfully\nGot: ${dataJson.message}`);
	};

	useEffect(() => {
		// setTimeout(() => {
		// 	// JANGAN PAKAI TIMEOUT INI HANYA CONTOH
		// 	fillData();
		// }, 1000);
		fillData();
	}, []);

	return (
		<>
			<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col col-xl-10'>
							<div className='card' style={{ borderRadius: "15px" }}>
								<div className='card-body p-5'>
									<h2 className='mb-3'>My Todo List</h2>

									<hr />

									<Link to='/add'>
										<button type='submit' className='btn btn-info'>
											Add
										</button>
									</Link>

									<Logout setIsLoggedIn={setIsLoggedIn} />

									<ul className='nav nav-tabs mb-2 pb-2 mt-4'>
										<li className='nav-item' onClick={() => setMode("all")}>
											<span className={showMode === "all" ? `nav-link active` : `nav-link`}>All</span>
										</li>
										<li className='nav-item' onClick={() => setMode("active")}>
											<span className={showMode === "active" ? `nav-link active` : `nav-link`}>Active</span>
										</li>
										<li className='nav-item' onClick={() => setMode("completed")}>
											<span className={showMode === "completed" ? `nav-link active` : `nav-link`}>Completed</span>
										</li>
									</ul>

									<ul className='list-group mb-0 mt-2'>
										{notes ? (
											filterMap[showMode](notes).map((note, index) => (
												<li className='list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2' key={index}>
													<div className='d-flex align-items-center'>
														<input className='form-check-input me-2' type='checkbox' checked={note.completed} aria-label='...' onChange={() => checkBoxClick(note._id)} />
														{note.completed ? (
															<s>
																{note.title}

																<br />

																{note.content}
															</s>
														) : (
															<>
																{note.title}
																<br />
																{note.content}
															</>
														)}
													</div>
													<span className='pointer' data-mdb-toggle='tooltip' title='Remove item'>
														<i className='fas fa-times text-primary me-3' onClick={() => deleteData(note._id)}></i>
														<Link to={`/edit/${note._id}`}>
															<i class='fa-solid fa-pen-to-square'></i>
														</Link>
													</span>
												</li>
											))
										) : (
											<>
												<div className='d-flex justify-content-center mt-3'>
													<div className='spinner-grow text-warning' role='status'>
														<span className='visually-hidden'>Loading...</span>
													</div>
												</div>
											</>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
