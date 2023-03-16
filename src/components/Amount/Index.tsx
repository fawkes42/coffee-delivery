import { useState } from "react";
import { AmountContainer } from "./styles";

export function Amount() {
    const [amount, setAmount] = useState(0);

    const add = () => {
        if (amount >= 10) return;
        setAmount(state => state + 1);
    }

    const remove = () => {
        if (amount <= 0) return;
        setAmount(state => state - 1);
    }

    return (
        <AmountContainer>
            <button onClick={remove}>-</button>
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                min={1}
                max={10}
            />
            <button onClick={add}>+</button>
        </AmountContainer>
    )
}