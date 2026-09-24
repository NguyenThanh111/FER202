import { useContext } from "react"
import { book2Context } from "./ComponentA"

export default function ComponentY(){

    const book2 = useContext(book2Context)
    
    return(
        <div className="box">
            <h1>Component Y</h1>
            <h3>Book: {book2.book2}</h3>
        </div>
    )
}