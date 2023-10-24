import React, { useCallback } from "react";
import { Typography, Flex, Layout, Button } from "antd";
import { useSelector } from "react-redux";
import { selectInput, selectMessages } from "@/store/features/chat";
import { selectCurrentRoom } from "@/store/features/room";
import Rooms from "@/components/Rooms";
import useChatService from "@/hooks/chatService";
import { selectUser } from "@/store/features/user";
import Message from "@/components/Message";

const Home = () => {
  const { handleInputChange, addChat } = useChatService(true, true);
  const messages = useSelector(selectMessages);
  const room = useSelector(selectCurrentRoom);
  const user = useSelector(selectUser);
  const value = useSelector(selectInput);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(event.target.value);
    },
    [handleInputChange]
  );
  const handleSend = useCallback(() => {
    addChat(value);
  }, [addChat, value]);
  return (
    <Flex style={{ background: "#f0f0f0", position: "relative" }}>
      {/* ChatRooms */}
      <Rooms />
      {/* ChatRooms */}
      {/* MessageWrapper */}
      {room?.haveJoined ? (
        <>
          <div
            style={{
              width: "75%",
            }}
          >
            {/* Header */}
            <Layout.Header
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                width: "100%",
              }}
            >
              <Typography.Title level={3} style={{ paddingBottom: 20 }}>
                {room?.name}
              </Typography.Title>
            </Layout.Header>
            {/* Header */}
            <div
              style={{
                width: "80%",
                height: "85%",
                position: "fixed",
                overflowY: "auto",
              }}
            >
              {/* Messages */}
              <div
                style={{
                  marginLeft: "60px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {messages?.map((chat, idx) => (
                  <Message
                    key={idx}
                    isSender={chat.user?.id == user?.id}
                    chat={chat}
                  />
                ))}
              </div>
            </div>
            {/* Messages */}
          </div>
          {/* MessageWrapper */}
          {/* InputWrapper */}
          <div
            style={{
              position: "fixed",
              bottom: 10,
              width: "100%",
              paddingLeft: "25%",
            }}
          >
            <input
              onChange={handleChange}
              placeholder="Type a message"
              value={value}
              style={{
                height: 50,
                outline: "none",
                borderRadius: 7,
                border: "none",
                padding: 25,
                fontSize: 16,
                width: "63.5%",
                marginRight: 10,
              }}
            />
            <Button
              size="large"
              type="primary"
              style={{ height: 50 }}
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
          {/* InputWrapper */}
        </>
      ) : (
        <Layout.Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            width: "100%",
          }}
        >
          <Typography.Title level={3} style={{ paddingBottom: 20 }}>
            Join room to start chating
          </Typography.Title>
        </Layout.Header>
      )}
    </Flex>
  );
};

export default Home;
