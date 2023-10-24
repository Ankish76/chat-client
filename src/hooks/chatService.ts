import { ChatRoom } from "@web/generated/graphql";
import { Subscription } from "zen-observable-ts";
import {
  AddMessageDocument,
  Chat,
  ChatSubDocument,
  ChatsDocument,
  ChatsQueryVariables,
  JoinRoomDocument,
  RoomsDocument,
  RoomsQueryVariables,
  SessionUserDocument,
  User,
} from "@web/generated/graphql-operations";
import { addMessage, inputChange, resetChats } from "@web/store/features/chat";
import {
  resetRooms,
  selectCurrentRoom,
  setCurrentRoom,
  joinRoom as joinRoomAction,
} from "@web/store/features/room";
import { selectUser, setUser } from "@web/store/features/user";
import { useApolloClient, useQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useChatService = (
  refreshOnMount = true,
  autoSubForCurrentRoom = true
) => {
  const { data } = useQuery(SessionUserDocument);
  const client = useApolloClient();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const room = useSelector(selectCurrentRoom);
  useEffect(() => {
    if (data?.sessionUser) {
      dispatch(setUser(data.sessionUser));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.sessionUser]);
  const getRooms = useCallback(
    (variables: RoomsQueryVariables = {}) => {
      client
        .query({
          query: RoomsDocument,
          variables,
        })
        .then(({ data }) => {
          dispatch(
            resetRooms(
              data.rooms.edges
                .map((m) => m?.node)
                .filter((m) => m) as ChatRoom[]
            )
          );
          dispatch(
            setCurrentRoom((data.rooms.edges[0]?.node as ChatRoom) || null)
          );
        });
    },
    [client, dispatch]
  );

  const getChats = useCallback(
    (variables: ChatsQueryVariables) => {
      client
        .query({
          query: ChatsDocument,
          variables,
        })
        .then(({ data }) =>
          dispatch(
            resetChats(
              data.chats.edges.map((m) => m?.node).filter((m) => m) as Chat[]
            )
          )
        );
    },
    [client, dispatch]
  );

  const joinRoom = useCallback(
    (roomId: string, name: string) => {
      client
        .mutate({
          mutation: JoinRoomDocument,
          variables: {
            roomId,
            name,
          },
        })
        .then(({ data }) => {
          if (data?.joinRoom) {
            dispatch(setUser(data?.joinRoom));
            dispatch(joinRoomAction(roomId));
            getRooms();
            getChats({ roomId });
          }
        });
    },
    [client, dispatch, getChats, getRooms]
  );

  const changeRoom = useCallback(
    (room: ChatRoom) => {
      dispatch(setCurrentRoom(room));
      if (room.haveJoined) {
        getChats({ roomId: room.id });
      }
    },
    [dispatch, getChats]
  );

  const handleInputChange = useCallback(
    (value: string) => {
      dispatch(inputChange(value));
    },
    [dispatch]
  );

  const addChat = useCallback(
    (message: string) => {
      if (user?.id && room?.id && message.trim()) {
        client
          .mutate({
            mutation: AddMessageDocument,
            variables: {
              roomId: room.id,
              userId: user.id,
              message: message.trim(),
            },
          })
          .then(({ data }) => {
            if (data?.addMessage) {
              handleInputChange("");
              dispatch(
                addMessage({ ...data.addMessage, user: user as User, room })
              );
            }
          });
      }
    },
    [user, room, client, handleInputChange, dispatch]
  );

  const subscribeChat = useCallback(
    (roomId: string) => {
      return client
        .subscribe({
          query: ChatSubDocument,
          variables: {
            roomId,
          },
        })
        .subscribe(({ data }) => {
          if (data?.chatSub && user && data?.chatSub.user?.id !== user?.id) {
            dispatch(addMessage(data.chatSub as Chat));
          }
        });
    },
    [client, user, dispatch]
  );

  useEffect(() => {
    if (refreshOnMount) {
      getRooms();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshOnMount]);
  useEffect(() => {
    if (room?.id && refreshOnMount) {
      getChats({ roomId: room.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshOnMount, room?.id]);
  useEffect(() => {
    let sub: Subscription;
    if (room?.id && autoSubForCurrentRoom) {
      sub = subscribeChat(room.id);
    }
    return () => sub?.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSubForCurrentRoom, room?.id]);
  return {
    getRooms,
    getChats,
    joinRoom,
    changeRoom,
    addChat,
    handleInputChange,
    subscribeChat,
  };
};

export default useChatService;
