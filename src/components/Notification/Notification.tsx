import React, { FC } from "react";

import "./Notification.scss";

interface NotificationProps {
  children: any;
}

const Notification: FC<NotificationProps> = ({ children }) => {
  return <div className="notification notification--active">{children}</div>;
};

export default Notification;
