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
                    title: 'Discover',
                    // tabBarIcon
            }}/>

            <Tabs.Screen 
                name='start-run'
                options={{
                    headerShown: false,
                    title: 'Start Run',
                    // tabBarIcon
            }}/>

            <Tabs.Screen 
                name='settings'
                options={{
                    headerShown: false,
                    title: 'Settings',
                    // tabBarIcon
            }}/>

            <Tabs.Screen 
                name='profile'
                options={{
                    headerShown: false,
                    title: 'Profile',
                    // tabBarIcon
            }}/>

        </Tabs>
    </>
  )
}

export default TabsLayout;