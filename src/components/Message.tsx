import React from "react";
import { Avatar } from "antd";
import { Chat } from "@web/generated/graphql-operations";

export type MessageProps = {
  chat: Chat;
  isSender: boolean;
};

const messageWrapperStyle: React.CSSProperties = {
  display: "flex",
  background: "#D9FDD3",
  width: "fit-content",
  padding: "13px 28px",
  fontSize: "17px",
  borderRadius: 7,
  float: "right",
  alignSelf: "flex-end",
  marginRight: "8%",
  border: "none",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
};

const avatarWrapper: React.CSSProperties = {
  backgroundColor: "#f56a00",
  verticalAlign: "middle",
};

const rootWrapper: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 7,
};

const messageWrapperStyle2: React.CSSProperties = {
  display: "flex",
  width: "fit-content",
  background: "#fff",
  padding: "13px 28px",
  fontSize: "17px",
  borderRadius: 7,
  border: "none" /* Remove the border or customize it */,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" /* Box shadow */,
  cursor: "pointer",
};

const joinedStyle: React.CSSProperties = {
  width: "80%",
  textAlign: "center",
  background: "#fff",
  padding: "13px 28px",
  fontSize: "17px",
  borderRadius: 7,
  cursor: "pointer",
};

const stringAvatar = (name: string) => {
  const names = name.split(" ");
  const fName = names[0] || "";
  const lName = names[1] || "";
  return `${fName[0] || ""} ${lName[0] || ""}`.toUpperCase();
};

const Message: React.FC<MessageProps> = ({ chat, isSender }) => {
  const { message, user, type } = chat;
  if (type === "JOIN") {
    return <p style={joinedStyle}>{isSender ? "You have joined" : message}</p>;
  }
  return (
    <>
      {isSender ? (
        <p style={messageWrapperStyle}>{message}</p>
      ) : (
        <div style={rootWrapper}>
          <Avatar style={avatarWrapper} size="large" gap={4}>
            {stringAvatar(user.name)}
          </Avatar>
          <p style={messageWrapperStyle2}>{message}</p>
        </div>
      )}
    </>
  );
};

export default Message;
