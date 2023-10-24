const getWs = (isServer?: boolean) => (isServer ? null : global.WebSocket);

export default getWs;
