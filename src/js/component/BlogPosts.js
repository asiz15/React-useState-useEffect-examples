import React, { useState, useEffect } from "react";
import axios from "axios";

export const BlogPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const getPosts = () => {
		setLoading(true);
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => {
				setTimeout(() => {
					setPosts(res.data.slice(0, 20));
					setLoading(false);
				}, 2000);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		console.log("Component render or RE RENDER");
	});
	useEffect(() => {
		console.log("'posts' changed!. This cause component re render");
		console.log("It may executed only if posts has changes");
	}, [posts]);
	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="container-fluid">
			<h2>Posts</h2>
			{loading ? (
				<h5>Loading posts...</h5>
			) : (
				<>
					{posts.length > 0 ? (
						<button
							className="btn btn-primary"
							onClick={() => setPosts([])}>
							Clear posts
						</button>
					) : (
						<button className="btn btn-primary" onClick={getPosts}>
							Get posts
						</button>
					)}
					<div className="row gx-0 mt-5">
						{posts.map(post => {
							return (
								<div
									className="col-4 col-md-4 mb-4"
									key={post.id}>
									<div className="card h-100">
										<div className="card-body">
											<h5 className="card-title">
												{post.title}
											</h5>
											<p className="card-text">
												{post.body}
											</p>
											<a
												href="#"
												className="btn btn-primary">
												Go somewhere
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};
