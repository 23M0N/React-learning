import { useEffect, useRef, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0)
    const timerRef = useRef(null)
    const [val, setVal] = useState(0)
    const [ispeer, setIsPeer] = useState(true)

    useEffect(() => {
        if(ispeer == true){
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [val]);

    function handleClick() {
        setVal(val + 1);
        clearInterval(timerRef.current);
        ifpeer();
    }

    function ifpeer(){
        if(val % 2 == 0) {
            setIsPeer(true);
        }else{
            setIsPeer(false);
        }
    }

    return (
        <div>
            <h2>Timer : {count}</h2>
            <button onClick={handleClick}>{ispeer ? "pause" : "continue" }</button>
        </div>
    )
}

 