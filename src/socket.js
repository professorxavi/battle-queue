const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:3500')

  function addToQueue(onMessageReceived) {
    socket.on('add user', onMessageReceived)
  }

  function updateQueue(onMessageReceived) {
    socket.on('update queue', onMessageReceived)
  }

  function unregisterHandler() {
    socket.off('message')
  }

  socket.on('error', function (err) {
    console.log('received socket error:')
    console.log(err)
  })

  return {
    addToQueue,
    updateQueue,
    unregisterHandler
  }
}
