import { useState, useEffect } from "react";
import { Jam } from "./components/Jam";
import { ListUser } from "./components/ListUser";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
	return (
		<>
			<main>
				<h2>Welcome to the homepage!</h2>
				<p>You can do this, I believe in you.</p>
			</main>
			<nav>
				<Link to='/about'>About</Link>
				<br />
				<Link to='/listuser'>ListUser</Link>
			</nav>
		</>
	);
}

function About() {
	return (
		<>
			<main>
				<h2>Who are we?</h2>
				<p>That feels like an existential question, don't you think?</p>
			</main>
			<nav>
				<Link to='/'>Home</Link>
			</nav>
		</>
	);
}

function App() {
	let [red, setRed] = useState(false);

	const formatNama = (nama) => {
		return nama.toUpperCase();
	};

	const ubahWarna = () => {
		setRed(!red);
	};

	const arrayNama = ["Andi", "Budi", "Caca"];

	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter((counter) => counter + 1);
	};
	const decrement = () => {
		setCounter((counter) => counter - 1);
	};

	const [waktu, setWaktu] = useState(null);

	const [stateObject, setStateObject] = useState([{}]);

	const addC = () => {
		const idRand = Math.random();
		setStateObject((stateObject) => [...stateObject, { id: idRand, user: `Caca ${idRand}` }]);
	};

	const removeA = () => {
		setStateObject((stateObject) => stateObject.filter(({ user }) => user !== "Andi"));
	};

	const removeAll = () => {
		setStateObject([]);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setWaktu(new Date().toLocaleTimeString());
		}, 1000);

		const a = [
			{
				id: 1,
				user: "Andi",
			},
			{
				id: 2,
				user: "Budi",
			},
		];
		setStateObject(a);

		// TODO
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			{/* <div className='App'>
				<p>
					Halo, {1 + 1}
					{arrayNama.map((nama) => {
						if (nama.charAt(0) !== "B") return formatNama(nama) + " ";
					})}
				</p>
				<br className='mt' />
				<p onClick={ubahWarna} style={{ color: red ? "red" : "blue" }}>
					{red ? "MERAH" : "BIRU"}
				</p>
				<br className='mt' />
				<p>{counter}</p>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<br className='mt' />
				<Jam waktu={waktu} />
				<br className='mt' />
			</div> */}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='listuser' element={<ListUser stateObject={stateObject} removeA={removeA} addC={addC} removeAll={removeAll} />} />
			</Routes>
		</>
	);
}

export default App;
