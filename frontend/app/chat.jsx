// Dependencies
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useChatLogic } from './(tabs)/logic/chat-logic';


const chat = () => {
  const { messages, onSend, renderBubble } = useChatLogic()
  return (
    <SafeAreaView className='h-full bg-white'>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
      />
    </SafeAreaView>
  )
}

export default chat;