import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Counter = ({ from }) => {
	const [counter, setCounter] = useState(from);
	const [text, setText] = useState("Some text");

	const decrease = () => {
		setCounter(counter - 1);
	};

	const randomText = () => {
		const arr = [
			"Hi world",
			"Hello world",
			"4Geeks",
			"Javascript",
			"React"
		];
		const item = arr[Math.floor(Math.random() * arr.length)];

		setText(item);
	};

	useEffect(() => {
		console.log("This will be printed only if 'counter' changes");
		const timer = counter > 0 && setInterval(() => decrease(), 1000);
		return () => {
			clearInterval(timer);
			console.log("cleanup!!");
		};
	}, [counter]);

	useEffect(() => {
		console.log("This will be printed only if 'text' has changes");
		console.log(`'text' is now ${text}`);
	}, [text]);

	return (
		<div>
			<h1>{counter}</h1>
			<p>{text}</p>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={decrease}>-</button>
			<br></br>
			<button onClick={randomText}>Change text</button>
		</div>
	);
};

Counter.propTypes = {
	from: PropTypes.number
};
