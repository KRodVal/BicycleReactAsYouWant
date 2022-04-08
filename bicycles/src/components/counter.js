import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const addOneToCounter = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={addOneToCounter}>Add</button>
        </>
        
    );
}

export default Counter;