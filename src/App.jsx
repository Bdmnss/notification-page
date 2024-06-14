import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <section>
        <div>
          <div>
            <h2>Notifications</h2>
            <div>3</div>
          </div>
          <p>Mark all as read</p>
        </div>
      </section>
    </>
  );
}

export default App;
