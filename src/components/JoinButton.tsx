import { useCallback, useState } from "react";
import { Button, Modal, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useChatService from "@web/hooks/chatService";

const JoinButton: React.FC<{ roomId: string }> = ({ roomId }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);
  const { joinRoom } = useChatService(false, false);
  const handleJoin = useCallback(() => {
    if (roomId && name.trim()) {
      joinRoom(roomId, name.trim());
      handleToggle();
    }
  }, [handleToggle, joinRoom, name, roomId]);
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );
  return (
    <>
      <Button type="primary" onClick={handleToggle}>
        Join
      </Button>
      <Modal
        title="Enter Name to Join Chat Room"
        open={open}
        okButtonProps={{ "data-testid": "submitButton" }}
        onOk={handleJoin}
        onCancel={handleToggle}
      >
        <Input
          size="large"
          placeholder="Enter Full Name"
          prefix={<UserOutlined />}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  );
};
export default JoinButton;
