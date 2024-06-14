import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Notification from "./Components/notification/Notification";
import Section from "./Components/section/Section";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <div className="app-div">
      <Section
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <main>
        {notifications.map((notification) => (
          <Notification
            notification={notification}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
