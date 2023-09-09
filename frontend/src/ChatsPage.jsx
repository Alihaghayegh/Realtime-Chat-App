import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';


function ChatsPage(props) {
  const chatProps = useMultiChatLogic(`${process.env.API_KEY}`, props.user.username, props.user.secret)
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
  )
}

export default ChatsPage