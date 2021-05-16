"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.socketVideo = void 0;const socketVideo = (socket) => {
  socket.on('join-room-v2', ({ roomId, userId }) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected-v2', userId);
  });
};exports.socketVideo = socketVideo;