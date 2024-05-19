// Dependencies
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import React, { useState, useCallback, useEffect } from 'react';

// Tools
import { getValueFor } from '../../../tools/secureStore';


export const useChatLogic = () => {
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
  
    const renderBubble = (props) => {
      return (
        <Bubble
          {...props}
          textStyle={{
            left: {
              color: 'black', 
            },
            right: {
              color: 'white', 
            },
          }}
          wrapperStyle={{
            left: {
              backgroundColor: '#F5F5F5',
            },
            right: {
              backgroundColor: '#A00119',
            },
          }}
        />
      )
    }
  
    const onSend = useCallback((messages = []) => {
      const getToken = async () => {
        const token = await getValueFor('token')
        return token
      }
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
      
      getToken().then(token => {
        if (token) {
          fetch('http://192.168.51.108:8000/cadence/api/chat/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ message: messages[0].text }),
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok' + response.status)
            }
            return response.json()
          })
          .then((data) => {
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, [
                {
                  _id: Math.random().toString(), 
                  text: data.response[0][1], 
                  createdAt: new Date(),
                  user: {
                    _id: 2, 
                    name: 'AI',
                    avatar: 'https://static.vecteezy.com/system/resources/previews/024/558/811/non_2x/openai-chatgpt-logo-icon-free-png.png',
                  },
                },
              ])
            );
          })
          .catch((error) => {
            console.error('Error:', error)
          })
        }
      })
    }, [])

    return{
        messages,
        setMessages,
        renderBubble,
        onSend
    }
}

