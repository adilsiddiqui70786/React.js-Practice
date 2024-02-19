import { useState } from "react";
import { generateTicketNumber, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
	let [ticket, setTicket] = useState(generateTicketNumber(n));
	let isWinnig = winCondition(ticket);

	let buyTicket = () => {
		setTicket(generateTicketNumber(n));
	};

	return (
		<div>
			<h3>Lottery Game!</h3>
			<Ticket ticket={ticket} />
			<button onClick={buyTicket}>Buy Ticket</button>
			<h2>{isWinnig && "Congratulation, You won Lottery Ticket!"}</h2>
		</div>
	);
}
