import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Notification from "./Components/notification/Notification";

function App() {
  const [notifications, setNotifications] = useState(data);

  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setNotifications(updatedNotifications);
  };

  return (
    <div className="app-div">
      <section>
        <div className="section-div">
          <div className="notifications-div">
            <h2>Notifications</h2>
            <div>{counter}</div>
          </div>
          <p onClick={markAllAsRead}>Mark all as read</p>
        </div>
      </section>

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
