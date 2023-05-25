import {sum, getRolls} from "./utils";
import { useState } from "react";
import "./Lucky7.css"
import Dice from './Dice.jsx'

export default function Lucky7(){
    const [dice, setDice] = useState(getRolls(2));
    const won = sum(dice) === 7;
    const rollAgain = () => {
        setDice(getRolls(2));
    }
    return (
        <div className="Lucky7">
            <h1>Lucky7 {won && "You Win!!!!!"}</h1>
            <Dice dice = {dice} />
            <button onClick={rollAgain}>Roll Again</button>
        </div>
    )
}