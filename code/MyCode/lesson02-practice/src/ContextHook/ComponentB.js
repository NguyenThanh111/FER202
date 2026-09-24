import { useContext } from "react";
import ComponentC from "./ComponentC";
import { book1Context } from "./ComponentA";

export default function ComponentB() {
  const book1 = useContext(book1Context);


  return (
    <div className="box child-component">
      <h1>Component B</h1>
      <h3>
        Book: {book1.book1}
      </h3>
      <ComponentC></ComponentC>
    </div>
  );
}
