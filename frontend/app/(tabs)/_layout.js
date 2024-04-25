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

            <Tabs.Screen 
                name='start-run'
                options={{
                    headerShown: false,
                    title: 'Start Run'
            }}/>

            <Tabs.Screen 
                name='settings'
                options={{
                    headerShown: false,
                    title: 'Settings'
            }}/>

            <Tabs.Screen 
                name='profile'
                options={{
                    headerShown: false,
                    title: 'Profile'
            }}/>

        </Tabs>
    </>
  )
}

export default TabsLayout;