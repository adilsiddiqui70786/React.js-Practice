import { useState } from "react";
import "./Lottery.css";
import { generateTicketNumber, sum } from "./helper";

export default function Lottery() {
	let [ticket, setTicket] = useState(generateTicketNumber(3));
	let isWinnig = sum(ticket) === 15;

	let TicketHandler = () => {
		setTicket(generateTicketNumber(3));
	};

	return (
		<div>
			<h3>Lottery Game!</h3>
			<div className="ticket">
				<span>{ticket[0]}</span>
				<span>{ticket[1]}</span>
				<span>{ticket[2]}</span>
			</div>

			<br />
			<button onClick={TicketHandler}>Buy Ticket</button>
			<h2 style={{ color: "green" }}>
				{isWinnig && "Congratulation, You won Lottery Ticket!"}
			</h2>
		</div>
	);
}
