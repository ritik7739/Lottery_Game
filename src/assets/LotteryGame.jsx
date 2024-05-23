import { useState } from "react";
import { genTicket,sum } from "./genTicket";
import "./LotteryGame.css";
import Ticket from "./Ticket";
export default function LotteryGame({n=3,winningSum=15}){
    let[ticket,setTicket]=useState((genTicket(n)));
    let isWining=sum(ticket)===winningSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1> Lottery Game!</h1>
              <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWining && "Congratulations,You Won!"}</h3>
        </div>
    )
}