import React, { useState } from "react";
import { Counter } from "./Counter";
import { BlogPosts } from "./BlogPosts";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(33);
	return (
		<div className="text-center mt-5">
			<BlogPosts></BlogPosts>
		</div>
	);
};

export default Home;
