import React from "react";
import "./section.css";

export default function Section({ notifications, setNotifications }) {
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
    <section>
      <div className="section-div">
        <div className="notifications-div">
          <h2>Notifications</h2>
          <div>{counter}</div>
        </div>
        <p onClick={markAllAsRead}>Mark all as read</p>
      </div>
    </section>
  );
}
