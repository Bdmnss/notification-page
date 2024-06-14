import React from "react";

export default function Notification({
  notification,
  notifications,
  setNotifications,
}) {
  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  return (
    <div
      className="notification-div"
      style={!notification.isRead ? { backgroundColor: "#f7fafd" } : null}
      onClick={() => read(notification.id)}
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
                  <span className="groupName">{notification.groupName}</span>
                ) : null}
              </p>
              {!notification.isRead ? <div className="circle"></div> : null}
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
          Hello, thanks for setting up the Chess Club. I’ve been a member for a
          few weeks now and I’m already having lots of fun and improving my
          game.
        </div>
      ) : null}
    </div>
  );
}
