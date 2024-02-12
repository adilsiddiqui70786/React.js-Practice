import { useState } from "react";

export default function LikeButton() {
	let [isLiked, setisLiked] = useState(false);
	const [clicks, setclicks] = useState(0);

	let toggleLike = () => {
		setisLiked(!isLiked);
		setclicks(clicks + 1);
	};

	let style = {
		color: "red",
	};
	return (
		<div>
			<h1 onClick={toggleLike}>
				<p>Clicks = {clicks}</p>
				{isLiked ? (
					<i className="fa-solid fa-heart" style={style}></i>
				) : (
					<i className="fa-regular fa-heart"></i>
				)}
			</h1>
		</div>
	);
}
