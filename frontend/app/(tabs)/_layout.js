import { Tabs, Redirect } from "expo-router";
import React from 'react'

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
            name='discover'
            options={{
                headerShown: false,
                title: 'Discover'
            }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout;