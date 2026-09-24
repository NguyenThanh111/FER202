import { use, useEffect, useState } from "react"

export default function BaseEffectHook(){

    const [count, setCount] = useState(0)
    const [label, setLabel] = useState("Hello guy!")

    useEffect(() => {console.log("useEffect (trường hợp có hàm callback) here!");})

    useEffect(() => {console.log("useEffect (trường hợp có dependence là []) here!");})

    useEffect(() => {console.log("useEffect (trường hợp có dependence cụ thể) here!")}, [count])

    return(
        <>
            {console.log("Componet render here!")}
            <h1> BaseEffectHook </h1>
            Counter: {count}
            <button onclick={() => setCount(count + 1)}>increase</button>

            <h2>Label: {label}</h2>
            <p>
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)}></input>
            </p>
        </>
    )
}