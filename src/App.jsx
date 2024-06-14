import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <div className="app-div">
      <section>
        <div className="section-div">
          <div className="notifications-div">
            <h2>Notifications</h2>
            <div>3</div>
          </div>
          <p>Mark all as read</p>
        </div>
      </section>

      <main>
        {notifications.map((notification) => (
          <div
            className="notification-div"
            style={!notification.isRead ? { backgroundColor: "#f7fafd" } : null}
          >
            <div className="notification-div-without-text">
              <img className="profilePic" src={notification.profilePic} />
              <div className="notification-with-user-picture">
                <div>
                  <div className="user-description-div">
                    <p>
                      <span className="username">{notification.username}</span>{" "}
                      <span className="action">{notification.action}</span>
                      {notification.post ? (
                        <span className="post">{notification.post}</span>
                      ) : null}
                      {notification.groupName ? (
                        <span className="groupName">
                          {notification.groupName}
                        </span>
                      ) : null}
                    </p>
                    {!notification.isRead ? (
                      <div className="circle"></div>
                    ) : null}
                  </div>
                  <p className="time">{notification.time}</p>
                </div>
                {notification.userPicture ? (
                  <img className="userPicture" src={notification.userPicture} />
                ) : null}
              </div>
            </div>
            {notification.text ? (
              <div className="text">
                Hello, thanks for setting up the Chess Club. I’ve been a member
                for a few weeks now and I’m already having lots of fun and
                improving my game.
              </div>
            ) : null}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
