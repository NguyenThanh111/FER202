import { useState } from "react";
import "./App.css";
import UserPosts from "./Ex10/UserPosts";
import CountdownTimer from "./Ex11/CountdownTimer";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer initialValue={10} />

        <label>
          Chọn user:{" "}
          <select
            value={userId}
            onChange={(event) => setUserId(Number(event.target.value))}
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
              <option key={id} value={id}>
                User {id}
              </option>
            ))}
          </select>
        </label>

        <UserPosts userId={userId} />
      </header>
    </div>
  );
}

export default App;
