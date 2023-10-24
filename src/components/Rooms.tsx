import { useCallback } from "react";
import { List, Typography } from "antd";
import { Chat, ChatRoom } from "@/generated/graphql-operations";
import { useSelector } from "react-redux";
import {
  selectCurrentRoom,
  selectRooms,
  setCurrentRoom,
} from "@/store/features/room";
import JoinButton from "./JoinButton";
import useChatService from "@/hooks/chatService";

export type MessageProps = {
  chat: Chat;
  isSender: boolean;
};

const RoomItem: React.FC<{ room: ChatRoom }> = ({ room }) => {
  const { changeRoom } = useChatService();
  const currentRoom = useSelector(selectCurrentRoom);

  const handleClick = useCallback(() => {
    changeRoom(room);
  }, [changeRoom, room]);
  return (
    <List.Item
      style={{
        borderBottom: "1px solid #f0f0f0",
        paddingRight: 10,
        paddingLeft: 10,
        background: currentRoom?.id === room.id ? "#f0f0f0" : undefined,
      }}
      onClick={handleClick}
    >
      <Typography.Text>{room.name}</Typography.Text>
      {room?.haveJoined ? null : <JoinButton roomId={room.id} />}
    </List.Item>
  );
};
const Rooms: React.FC = () => {
  const rooms = useSelector(selectRooms);
  return (
    <>
      <List
        style={{
          width: "25%",
          height: "calc(100vh - 16px)",
          background: "#fff",
          flexDirection: "column",
        }}
        header={
          <Typography.Title level={5} style={{ marginTop: 5 }}>
            Rooms
          </Typography.Title>
        }
        dataSource={rooms}
        renderItem={(item) => <RoomItem room={item} key={item.id} />}
      />
    </>
  );
};

export default Rooms;
