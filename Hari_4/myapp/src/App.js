import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// App.js
function Home() {
	return (
		<>
			<main>
				<h2>Welcome to the homepage!</h2>
				<p>This is from function home</p>
			</main>
			<nav>
				<Link to='/about'>About</Link>
			</nav>
		</>
	);
}

function About() {
	return (
		<>
			<main>
				<h2>This is about</h2>
				<p>About us ....</p>
			</main>
			<nav>
				<Link to='/'>Home</Link>
			</nav>
		</>
	);
}

function App() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((counter) => counter + 1);
	};
	const decrement = () => {
		setCounter((counter) => counter - 1);
	};

	return (
		<div className='App'>
			{/* <header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>

				<p>{counter}</p>

				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</header> */}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
