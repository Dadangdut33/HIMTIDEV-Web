import { Routes, Route, Link } from "react-router-dom";

export const ListUser = (props) => {
	return (
		<div className='App'>
			<div>{props.stateObject.length > 0 ? props.stateObject.map((item, i) => <h2 key={i}>{item.user}</h2>) : "Loading obj...."}</div>
			<button onClick={props.addC}>Add C</button>
			<button onClick={props.removeA}>Remove A</button>
			<button onClick={props.removeAll}>Remove ALL</button>

			<nav>
				<Link to='/'>Home</Link>
			</nav>
		</div>
	);
};
