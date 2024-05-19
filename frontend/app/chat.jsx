import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar, Send, Bubble, Composer } from 'react-native-gifted-chat'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const chat = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello, I'm your AI assistant here to help you on your journey! Ask me anything",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI',
          avatar: 'https://static.vecteezy.com/system/resources/previews/024/558/811/non_2x/openai-chatgpt-logo-icon-free-png.png'
        },
      },
    ])
  }, [])

  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

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

export default chat