import { useEffect, useState } from "react"

export default function CounterTimer({initialVal}){

    const [time, setTime] = useState(initialVal)

    const 

    useEffect(() => {
        if(time <= 0){
            return
        }

        const timerId = setInterval( () => {
            setTime(prevTime) 
        })
    })

    return(

    )
}