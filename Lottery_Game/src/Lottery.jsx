import { useState } from "react";
import "./Lottery.css";
import { generateTicketNumber } from "./helper";

export default function Lottery() {
	let [ticket, setTicket] = useState(generateTicketNumber(3));
	let generateRandom;

	return (
		<div>
			<h1>Lottery Game!</h1>
			<div className="ticket">
				<span>{ticket[0]}</span>
				<span>{ticket[1]}</span>
				<span>{ticket[2]}</span>
			</div>
		</div>
	);
}
